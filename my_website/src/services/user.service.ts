import { Request, Response } from 'express';
import { Users } from '../database/models/User';
// Function create user
async function createUsers(req: Request, res: Response) {
  // const { id } = req.body;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { phoneNumber } = req.body;

  Users
    .create({
      firstName: `${firstName}`, lastName: `${lastName}`, username: `${username}`, email: `${email}`, password: `${password}`, phoneNumber: `${phoneNumber}`,
    })
    .then((addUsers:any) => {
      res.send(addUsers);
    })
    .catch((err:any) => {
      res.send(err);
    });
}
// Function delete a user by his ID
async function deleteByIdUser(req: Request, res:Response) {
  const { id } = req.params;

  Users
    .destroy({ where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}
// Function Update the data of a user by his ID
async function updateByIdUser(req: Request, res:Response) {
  const { id } = req.body;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { phoneNumber } = req.body;
  await Users.update({
    firstName: `${firstName}`, lastName: `${lastName}`, username: `${username}`, email: `${email}`, password: `${password}`, phoneNumber: `${phoneNumber}`,
  }, { where: { id } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(400);
    });
}

export { createUsers, deleteByIdUser, updateByIdUser };// Exporting all functions to the controller
