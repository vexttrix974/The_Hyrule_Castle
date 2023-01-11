import authenticateJWT from '../middlewares/authenticateJWT';
// Authenticate function which check if the users has the good Acces token

const express = require('express');
const {
  getAll, getById, create, deleteById, updateById,
} = require('../controllers/products.controller');

const routerProducts = express();

routerProducts.get('/', getAll);

routerProducts.get('/:id', getById);

routerProducts.post('/', (req:any, res:any) => {
  authenticateJWT(req, res, create);
});

routerProducts.put('/', (req:any, res:any) => {
  authenticateJWT(req, res, updateById);
});

routerProducts.delete('/:id', (req:any, res:any) => {
  authenticateJWT(req, res, deleteById);
});

export default routerProducts;
