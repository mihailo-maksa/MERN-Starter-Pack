const mongoose = require("mongoose");
const config = require("config");
const connectionString = config.get("mongoURI");

module.exports = async function () {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
