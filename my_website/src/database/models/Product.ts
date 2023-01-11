import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Category from './Category';

export const product = sequelize.define(
  'product',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    isBottle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 1,
      },
    },
    isAccessory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
        max: 1,
      },
    },
    productDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },

);

product.belongsTo(Category);
// Foreign key between product and category.
export default product;
