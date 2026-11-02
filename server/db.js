
const { Pool } = require("pg");
const dotenv = require("dotenv");
const path = require("path");

// Load Neon variables from the project root
dotenv.config({
  path: path.resolve(__dirname, "../.env.local"),
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
