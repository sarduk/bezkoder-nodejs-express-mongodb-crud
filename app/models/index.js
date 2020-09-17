console.log("file app/models/index.js");

const dbConfig = require("../config/db.config.js");

//accertarsi che l'oggetto mongoose sia stato effettivamente creato prima di proseguire l'esecuzione
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
