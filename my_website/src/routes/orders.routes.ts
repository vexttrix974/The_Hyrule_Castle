import authenticateJWT from '../middlewares/authenticateJWT';
// Authenticate function which check if the users has the good Acces token

const express = require('express');

const routerOrder = express();

const {
  getAll, getById, create, deleteById, updateById,
} = require('../controllers/orders.controller');

routerOrder.get('/', getAll);

routerOrder.get('/:id', getById);

routerOrder.post('/', (req:any, res:any) => {
  authenticateJWT(req, res, create);
});

routerOrder.put('/', (req:any, res:any) => {
  authenticateJWT(req, res, updateById);
});
routerOrder.delete('/:id', (req:any, res:any) => {
  authenticateJWT(req, res, deleteById);
});

export default routerOrder;
