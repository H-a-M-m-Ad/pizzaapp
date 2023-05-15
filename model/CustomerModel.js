const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "Customer",

    {
      Customer_No: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      BUSINESSNAME: {
        type: DataTypes.LONGTEXT
      },
      ADDR1: {
        type: DataTypes.LONGTEXT
      },
      ADDR2: {
        type: DataTypes.LONGTEXT
      },
      CITY: {
        type: DataTypes.STRING(50)
      },
      STATE: {
        type: DataTypes.STRING(50)
      },
      Zip: {
        type: DataTypes.STRING(50)
      },
      Country: {
        type: DataTypes.LONGTEXT
      },
      PHONE1: {
        type: DataTypes.STRING(50)
      },
      CellPhone: {
        type: DataTypes.STRING(50)
      },
      MainEMAIL: {
        type: DataTypes.LONGTEXT
      },
      FIRSTNAME: {
        type: DataTypes.STRING(50)
      },
      LASTNAME: {
        type: DataTypes.STRING(50)
      },
      Status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      Web_Page1_Name: {
        type: DataTypes.STRING(50)
      },
      Web_Page1_URL: {
        type: DataTypes.LONGTEXT
      },
      Web_Page1_HTML: {
        type: DataTypes.LONGTEXT
      },
      Web_Page2_Name: {
        type: DataTypes.STRING(50)
      },
      Web_Page2_URL: {
        type: DataTypes.LONGTEXT
      },
      Web_Page2_HTML: {
        type: DataTypes.LONGTEXT
      },
      Web_Page3_Name: {
        type: DataTypes.STRING(50)
      },
      Web_Page3_URL: {
        type: DataTypes.LONGTEXT
      },
      Web_Page3_HTML: {
        type: DataTypes.LONGTEXT
      },
      Web_Page4_Name: {
        type: DataTypes.STRING(50)
      },
      Web_Page4_URL: {
        type: DataTypes.LONGTEXT
      },
      Web_Page4_HTML: {
        type: DataTypes.LONGTEXT
      },
      Web_Page5_Name: {
        type: DataTypes.STRING(50)
      },
      Web_Page5_URL: {
        type: DataTypes.LONGTEXT
      },
      Web_Page5_HTML: {
        type: DataTypes.LONGTEXT
      },
      password: {
        type: DataTypes.STRING(50)
      }
    },

    {
      freezeTableName: true,
      paranoid: true,
      initialAutoIncrement: 10
    }
  );
  return Customer;
};
