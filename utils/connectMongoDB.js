const mongoose= require("mongoose");
const initializeDatabase = require("../func/initializeDatabase");


async function MongoDB() {
  try {
    console.log('=======CONNETING DATABASE=========');
    await mongoose.connect(process.env.MONGO_URI);
    //initializeDatabase()
    console.log('=======DATABASE CONNECTED=========');
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

module.exports = MongoDB;