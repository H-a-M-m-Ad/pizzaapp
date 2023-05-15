const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define(
    "Voucher",

    {
      No: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      Voucher_Time: {
        type: DataTypes.STRING
      },
      Voucher_Date: {
        type: DataTypes.STRING
      },
      Voucher_Type_no: {
        type: DataTypes.BIGINT
      },
      Customer_No: {
        type: DataTypes.LONGTEXT
      },
      User_ID: {
        type: DataTypes.LONGTEXT
      },
      Customer_Name: {
        type: DataTypes.LONGTEXT
      },
      Customer_Address1: {
        type: DataTypes.LONGTEXT
      },
      Customer_Address2: {
        type: DataTypes.LONGTEXT
      },
      Customer_City: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Customer_State: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Customer_Country: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Customer_Phone: {
        type: DataTypes.BIGINT
      },
      Subtotal: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      TaxTotal: {
        type: DataTypes.BIGINT
      },
      Discount: {
        type: DataTypes.STRING(50)
      },
      FeesTotal: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Total: {
        type: DataTypes.DECIMAL(10, 2)
      },
      SessionID: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Internal_Notes: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Status: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Payment_Method: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Payment_Details: {
        type: DataTypes.DECIMAL(10, 2)
      },
      AddedByUser: {
        type: DataTypes.DECIMAL(10, 2)
      },
      LastModifyDate: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Customer_Code: {
        type: DataTypes.DECIMAL(10, 2)
      }
    },

    {
      freezeTableName: true,
      paranoid: true,
      initialAutoIncrement: 10
    }
  );
  return Voucher;
};
