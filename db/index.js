const mongoose = require("mongoose");
const chalk = require("chalk");
require("dotenv").config();
// const URI = process.env.MONGO_URI_DEV;
const URI = process.env.MONGO_URI_PROD;

const connnect = (async) => {
    mongoose
        .connect(URI)
        .then(() => {
            console.log(chalk.blue("DB is connected"));
        })
        .catch((err) => {
            console.log(chalk.red(`Database is not Connected. ${err.message}`));
        });
};

module.exports = connnect;
