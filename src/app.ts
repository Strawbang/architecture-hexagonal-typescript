import 'reflect-metadata';
import { container } from 'tsyringe';
import express from 'express';
import { UserController } from './application/UserController';
import { useExpressServer } from 'routing-controllers';
const app = express();
const port = 3000;

container.registerSingleton(UserController);
useExpressServer(app, {
  routePrefix: '/api',
  controllers: [ UserController ],
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});