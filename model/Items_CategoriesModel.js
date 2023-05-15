const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Items_Categories = sequelize.define(
    "Items_Categories",
    {
      No: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        unique: true,
        allowNull: false,
        primaryKey: true
      },
      Item_Code: {
        type: DataTypes.STRING
      },
      Item_Name: {
        type: DataTypes.STRING
      },
      Item_department_Code: {
        type: DataTypes.BIGINT
      },
      Item_Description_HTML: {
        type: DataTypes.LONGTEXT
      },
      Item_Description_HTML: {
        type: DataTypes.LONGTEXT
      },
      Item_ShortDescription: {
        type: DataTypes.LONGTEXT
      },
      Item_Main_Picture_URL: {
        type: DataTypes.LONGTEXT
      },
      Item_Main_Picture_URL_Thumb: {
        type: DataTypes.LONGTEXT
      },
      Item_Cost: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Item_Price1: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Item_Price2: {
        type: DataTypes.DECIMAL(10, 2)
      },
      Tax_Category: {
        type: DataTypes.BIGINT
      },
      Status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      Item_hot_deal: {
        type: DataTypes.BIGINT
      },
      Customer_Code: {
        type: DataTypes.STRING(50)
      }
    },
    {
      freezeTableName: true,
      paranoid: true,
      initialAutoIncrement: 1
    }
  );
  return Items_Categories;
};
