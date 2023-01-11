import { Request, Response } from 'express';
import { Users } from '../database/models/User';
import authenticateJWT from '../middlewares/authenticateJWT';

const jwt = require('jsonwebtoken');
const { createUsers, deleteByIdUser, updateByIdUser } = require('../services/user.service');

function next() {
  console.log('FUNCTION NEXT');
}

const secret = 'Koala';

async function getAll(req: Request, res: Response) {
  const test = await Users.findAll();
  res.json(test);
}
async function getById(req : Request, res: Response) {
  const { username } = req.params;
  const Userswithid = await Users.findOne({ where: {username } });
  res.json(Userswithid);
}

async function login(req : Request, res: Response) {
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { numberPhone } = req.body;
  const Userswithid = await Users.findOne({ where: { username } });

  if (Userswithid === null) {
    res.status(400).send('Invalid email or password');
  } else if (Userswithid.username === username && Userswithid.password === password) {
    const accessToken = jwt.sign({
      firstName: `${firstName}`, lastName: `${lastName}`, username: `${username}`, email: `${email}`, password: `${password}`, phoneNumber: `${numberPhone}`,
    }, secret, { expiresIn: '24H' });
    // Generating the accesToken according to the username and password and the secret word we have,
    res.send(accessToken); // To retrieve the access token and then put it in the headers
    authenticateJWT(req, res, next);
  } else {
    res.status(400).send('Invalid email or password');
  }
  return false;
}
async function create(req: Request, res: Response) {
  await createUsers(req, res);
}

async function deleteById(req: Request, res:Response) {
  await deleteByIdUser(req, res);
}
async function updateById(req: Request, res:Response) {
  await updateByIdUser(req, res);
}

export {
  getAll, getById, login, create, deleteById, updateById,
};
// Exporting all functions to the routes.
