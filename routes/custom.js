const express = require("express");
const router = express.Router();
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// @route api/custom/private_route
// @description Example private route (Get the current user's name)
// @access Private
router.get("/private_route", authMiddleware, async (req, res) => {
  try {
    // Check if user exists & is authenticated
    const currentUser = await User.findById(req.user.id).select("-password");

    if (!currentUser) {
      return res.status(400).json({ msg: "No user found" });
    }

    res.json(currentUser.name);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
