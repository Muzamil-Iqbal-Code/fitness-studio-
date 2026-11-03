
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const PgSession = require("connect-pg-simple")(session);
const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env.local"),
});

const pool = require("./db");

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET is missing");
}

const isProduction = process.env.NODE_ENV === "production";

const app = express();

if (isProduction) {
  app.set("trust proxy", 1);
}

app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

// Stripe webhook must be registered before express.json().
app.use(
  "/api/stripe",
  require("./routes/stripeWebhook")
);

app.use(express.json());
app.use(session({
  store: new PgSession({
    pool,
    tableName: "user_sessions",
    createTableIfMissing: true,
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));

app.get("/", (req, res) => {
  res.json({
    message: "IRON DISTRICT API is running!",
  });
});

app.use("/api/classes", require("./routes/classes"));
app.use("/api/trainers", require("./routes/trainers"));
app.use("/api/plans", require("./routes/plans"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/checkout", require("./routes/checkout"));
app.use("/api/orders", require("./routes/orders"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
