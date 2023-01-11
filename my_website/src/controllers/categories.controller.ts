import { Request, Response } from 'express';
import Category from '../database/models/Category';

const { createCategory, deleteByIdCategory, updateByIdCategory } = require('../services/category.service');

async function getAll(req: Request, res: Response) {
  const test = await Category.findAll();
  res.json(test);
}
async function getById(req : Request, res: Response) {
  const { id } = req.params;
  const Categorywithid = await Category.findOne({ where: { id } });
  res.json(Categorywithid);
}
async function create(req: Request, res:Response) {
  await createCategory(req, res);
}

async function deleteById(req: Request, res:Response) {
  await deleteByIdCategory(req, res);
}
async function updateById(req: Request, res:Response) {
  await updateByIdCategory(req, res);
}

export {
  getAll, getById, create, updateById,
  deleteById,
};
// Exporting all functions to the routes.
