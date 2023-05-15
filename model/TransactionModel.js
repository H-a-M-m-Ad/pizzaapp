const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",

    {
      No: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      Voucher_no: {
        type: DataTypes.BIGINT
      },
      T_Date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Date.now()
      },
      Qty: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      Unit_Price: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Total_Price: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Temp_Record: {
        type: DataTypes.BIGINT
      },
      Session_ID_temp: {
        type: DataTypes.STRING
      },
      Discount: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Tax: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Item_No: {
        type: DataTypes.BIGINT
      },
      Voucher_Type_No: {
        type: DataTypes.BIGINT
      },
      Internal_Notes: {
        type: DataTypes.STRING
      }
    },
    {
      freezeTableName: true,
      paranoid: true,
      initialAutoIncrement: 10
    }
  );
  return Transaction;
};
