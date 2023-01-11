import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

const Category = sequelize.define(
  'Category',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  },
);

export default Category;
