const express = require("express");
const router = express.Router();

// @route api/sample
// @description Sample Route
// @access Public
router.get("/", async (req, res) => {
  try {
    const text = "MERN Starter Pack";

    if (!text) {
      return res.status(400).send("Bad Request: No Text Found");
    }

    res.send(text);
  } catch (err) {
    console.error(err);

    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
