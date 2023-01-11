import { Request, Response } from 'express';
import routerCategories from './routes/categories.routes';
import routerOrder from './routes/orders.routes';
import routerProducts from './routes/products.routes';
import routerUser from './routes/users.routes';
import routerOrderProduct from './routes/orderProducts.route'

// Importing all routes
const express = require('express');

const app = express();
const port = 3000;

const cors = require('cors');

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200,
  // preflightContinue: false,
};

app.use((req:Request, res:Response, next:Function) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// Use of all routes called above
app.use('/user', routerUser);
app.use('/product', routerProducts);
app.use('/order', routerOrder);
app.use('/categories', routerCategories);
app.use('/OrderProduct', routerOrderProduct)
app.options('*', cors(corsOptions)); // Enable pre-flight

app.listen(port, () => {
  console.log(`Example router listening on port ${port}`);
});
