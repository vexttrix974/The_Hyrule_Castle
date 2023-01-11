import { Request, Response } from 'express';
import Orders from '../database/models/Order';

// Function create an order
async function createOrder(req: Request, res: Response) {
  const { orderdate } = req.body;
  const { userid } = req.body;

  Orders
    .create({
      orderdate: `${orderdate}`, UserId: `${userid}`,
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
  const { orderdate } = req.body;
  const { userid } = req.body;

  await Orders.update({ orderdate: `${orderdate}`, UserId: `${userid}` }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
// Exporting functions to the controller
export { createOrder, updateByIdOrder, deleteByIdOrder };
