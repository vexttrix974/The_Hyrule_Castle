import { DataTypes } from 'sequelize';
import { sequelize } from '../config';
import Orders from './Order';
import { product } from './Product';

const OrderProduct = sequelize.define('Order_Products', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize,
  timestamps: false,
});

product.hasMany(OrderProduct);
Orders.hasMany(OrderProduct);
// association many to many between orderproduct, product and orders
export default OrderProduct;
