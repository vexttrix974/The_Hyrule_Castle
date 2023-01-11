import { Request, Response } from 'express';
import { product } from '../database/models/Product';

const { createProduct, deleteByIdProduct, updateByIdProduct } = require('../services/product.service');

async function getAll(req: Request, res: Response) {
  const test = await product.findAll();
  res.send(test);
}
async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const productwithid = await product.findOne({ where: { id } });
  res.json(productwithid);
}

async function create(req: Request, res: Response) {
  await createProduct(req, res);
}

async function deleteById(req: Request, res:Response) {
  await deleteByIdProduct(req, res);
}
async function updateById(req: Request, res:Response) {
  await updateByIdProduct(req, res);
}
export {
  getAll, getById, create, deleteById, updateById,
};
// Exporting all functions to the routes.
