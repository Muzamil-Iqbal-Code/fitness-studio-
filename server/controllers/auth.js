
const bcrypt = require("bcrypt");
const pool = require("../db");

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email and password are required.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [normalizedEmail]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "An account with this email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name.trim(), normalizedEmail, hashedPassword]
    );

    req.session.user = result.rows[0];

    res.status(201).json({
      message: "Account created successfully!",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({
      message: "Something went wrong during signup.",
    });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required.",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [normalizedEmail]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const user = result.rows[0];

    const passwordMatches = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    res.json({
      message: "Login successful!",
      user: req.session.user,
    });
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({
      message: "Something went wrong during login.",
    });
  }
}

function currentUser(req, res) {
  res.json({
    user: req.session.user || null,
  });
}

function logout(req, res) {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: "Could not log out.",
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      message: "Logged out successfully.",
    });
  });
}

module.exports = {
  signup,
  login,
  currentUser,
  logout,
};
