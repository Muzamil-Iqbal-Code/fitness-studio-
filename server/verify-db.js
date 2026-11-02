const pool = require("./db");

async function verifyDatabase() {
  try {
    const tables = ["classes", "trainers", "plans", "users"];

    for (const table of tables) {
      const result = await pool.query(
        `SELECT COUNT(*) FROM ${table}`
      );

      console.log(`${table}: ${result.rows[0].count} records`);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    await pool.end();
  }
}

verifyDatabase();