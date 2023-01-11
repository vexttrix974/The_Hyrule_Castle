import { DataTypes } from 'sequelize';
import { sequelize } from '../config';

export const Users = sequelize.define(
  'Users',
  {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email:{      
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,    
      unique: false,
    },
    phoneNumber:{
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },

  },
  {
    sequelize,
  },
);

export default Users;
