const express = require("express");
const router = express.Router();

// @route api/sample/sample_route
// @description Sample Route
// @access Public
router.get("/sample_route", async (req, res) => {
  try {
    const name = "John";

    if (!name) {
      return res.status(400).send("Bad request");
    }

    res.send(name);
  } catch (err) {
    console.error(err);

    res.status(500).send("Internal server error");
  }
});

module.exports = router;
