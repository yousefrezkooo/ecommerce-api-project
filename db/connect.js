const mongoose = require("mongoose");

// keeping this separate from server.js so server.js doesn't get cluttered
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // no point running the server without a DB
  }
};

module.exports = connectDB;
