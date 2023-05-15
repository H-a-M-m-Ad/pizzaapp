const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config({ path: "./config/config.env" });
const Db = new Sequelize(
  process.env.SQLDB,
  process.env.SQLHOST,
  process.env.SQLPASSWORD,
  {
    dialect: "mysql",
    // logging:false
  }
);

Db.authenticate()
  .then(() => {
    console.log("Database Connection Successfull..");
  })
  .catch((err) => {
    console.log("Error" + err);
  });
