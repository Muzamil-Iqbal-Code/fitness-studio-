
const pool = require("./db");
const fs = require("fs");
const path = require("path");

async function createTables() {
  try {
    const schema = fs.readFileSync(
      path.join(__dirname, "database", "schema.sql"),
      "utf8"
    );

    await pool.query(schema);

    console.log("All database tables created successfully!");
  } catch (error) {
    console.error("Error creating tables:", error.message);
  } finally {
    await pool.end();
  }
}

createTables();
