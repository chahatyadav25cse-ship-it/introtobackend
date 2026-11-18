const mongoose = require("mongoose");

// Connects this app to the MongoDB Atlas cluster named in .env.
async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing. Add it to the .env file.");
  }

  if (uri.includes("localhost") || uri.includes("127.0.0.1")) {
    throw new Error("This project uses MongoDB Atlas. Do not use a local MongoDB address.");
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB Atlas");
}

module.exports = connectDB;
