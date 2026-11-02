
const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  currentUser,
  logout,
} = require("../controllers/auth");

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", currentUser);
router.post("/logout", logout);

module.exports = router;
