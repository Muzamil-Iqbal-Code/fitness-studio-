
const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM classes ORDER BY id"
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Classes API error:", error.message);
    res.status(500).json({ message: "Failed to fetch classes" });
  }
});

module.exports = router;
