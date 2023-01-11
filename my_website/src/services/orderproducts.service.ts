import { Request, Response } from 'express';
import Orders from '../database/models/Order_Products';

// Function create an order
async function createOrder(req: Request, res: Response) {
  const { date } = req.body;
  const { quantity } = req.body;
  const { productId } = req.body;
  const { OrderId } = req.body;

  Orders
    .create({
      date: `${date}`, quantity: `${quantity}`, productId: `${productId}`, OrderId: `${OrderId}`,
    })
    .then((addOrders:any) => {
      res.send(addOrders);
    })
    .catch((err:any) => {
      res.send(err);
    });
}
// Function delete a Order with his ID
async function deleteByIdOrder(req: Request, res:Response) {
  const { id } = req.params;

  Orders
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
// Function update a Order with his ID
async function updateByIdOrder(req: Request, res:Response) {
  const { id } = req.body;
  const { date } = req.body;
  const { quantity } = req.body;
  const { productId } = req.body;
  const { OrderId } = req.body;

  await Orders.update({
    date: `${date}`, quantity: `${quantity}`, productId: `${productId}`, OrderId: `${OrderId}`,
  }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
// Exporting functions to the controller
export { createOrder, updateByIdOrder, deleteByIdOrder };
