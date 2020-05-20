const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const connectionString = process.env.MONGO_URI;
// this project is setup to use MONGO_URI from the local .env file only in the development mode
// in the production mode, you MUST include it as an environment variable

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
    console.error(err);
    process.exit(1);
  }
};
