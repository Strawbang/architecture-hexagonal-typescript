import 'reflect-metadata';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { container } from 'tsyringe';
import UserController from './application/UserController';
import TsyringeAdapter from './application/TsyringeAdapter';
const app = express();
const port = 8080;

// https://github.com/typestack/routing-controllers/issues/656
useContainer(new TsyringeAdapter(container))

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [ UserController ],
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});