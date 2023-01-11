import { sequelize } from '../config';

const Category = require('../models/Category');
const OrderProduct = require('../models/Order_Products');
const Order = require('../models/Order');
const Users = require('../models/User');
const product = require('../models/Product');

// importating all the models
async function migrate() {
  await sequelize.sync({ alter: true });
}
migrate();
console.log(Category, Order, OrderProduct, Users, product);
// We must import all the models if we want to migrate them all but eslint doesn't like this
// because there is not used variable
// This console.log is here just to dodge eslint errors
