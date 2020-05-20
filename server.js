const express = require("express");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");
const connectDB = require("./config/connectDB");

// Define App
const app = express();

// Connect Database
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors({ origin: true }));

// Define Routes
app.use("/api/sample", require("./routes/sample"));

// Serve Static Assets in Production
if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  // Set Static Folder in Production
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${PORT}`);
});
