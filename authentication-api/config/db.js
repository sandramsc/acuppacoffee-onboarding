const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://athena-api:tbXJ6MnUB86bzxq@cluster0.lebet.mongodb.net/athena?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;


