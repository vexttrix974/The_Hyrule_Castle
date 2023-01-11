import { Request, Response } from 'express';
import Orders from '../database/models/Order';

const { createOrder, deleteByIdOrder, updateByIdOrder } = require('../services/order.service');

async function getAll(req: Request, res: Response) {
  const test = await Orders.findAll();
  res.json(test);
}
async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Orderswithid = await Orders.findOne({ where: { id } });
  res.json(Orderswithid);
}
async function create(req: Request, res: Response) {
  await createOrder(req, res);
}

async function deleteById(req: Request, res:Response) {
  await deleteByIdOrder(req, res);
}
async function updateById(req: Request, res:Response) {
  await updateByIdOrder(req, res);
}

export {
  getAll, getById, create, updateById, deleteById,
};
// Exporting all functions to the routes.
