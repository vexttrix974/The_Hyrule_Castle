import authenticateJWT from '../middlewares/authenticateJWT';
// Authenticate function which check if the users has the good Acces token

const express = require('express');

const routerCategories = express();

const {
  getAll, getById,
  create, deleteById, updateById,
} = require('../controllers/categories.controller');

routerCategories.get('/', getAll);

routerCategories.get('/:id', getById);

routerCategories.post('/', (req:any, res:any) => {
  authenticateJWT(req, res, create);
});
routerCategories.put('/', (req:any, res:any) => {
  authenticateJWT(req, res, updateById);
});
routerCategories.delete('/:id', (req:any, res:any) => {
  authenticateJWT(req, res, deleteById);
});
export default routerCategories;
