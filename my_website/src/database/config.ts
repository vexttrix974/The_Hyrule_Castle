const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'src/database/myenv.env' });
// Connexion to the database using infos in the myenv.env file
// Don't forget to use the example to setup yours
export const sequelize = new Sequelize(`${process.env.DATABASE_NAME}`, `${process.env.USER_NAME}`, `${process.env.PASSWORD}`, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection réussie');
  })
  .catch((err:any) => {
    console.error('Connection ratée', err);
  });

export { Sequelize };
