import { Request, Response } from 'express';

const jwt = require('jsonwebtoken');

export default function authenticateJWT(req: Request, res: Response, next: Function) {
  const auth = req.headers.authorization;
  if (auth === '' && res.headersSent === false) { // EMPTY TOKEN
    res.sendStatus(401);
  } else if (res.headersSent === false) {
    try {
      const decoded = jwt.verify(auth, 'Koala');
      console.log(decoded);
      console.log('Connexion réussi'); // VALID TOKEN
      next(req, res);
    } catch (err) {
      res.sendStatus(403); // BAD TOKEN
    }
  }
}
