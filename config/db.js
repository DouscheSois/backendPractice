const mongoose = require("mongoose");
const config = require("config");
const database = config.get("Mongo");

const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("Mongo Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
