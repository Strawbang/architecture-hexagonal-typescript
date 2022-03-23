import 'reflect-metadata';
import express from 'express';
import koa from 'koa';
import { useContainer, useExpressServer, useKoaServer } from 'routing-controllers';
import { container } from 'tsyringe';
import UserController from '../application/UserController';
import TsyringeAdapter from './TsyringeAdapter';
import { sequelize } from './Sequelize';
export const app = express();
sequelize
    .authenticate()
    .then(() => console.log('connect to db'))
    .catch(() => {
      throw "error";
    });

// https://github.com/typestack/routing-controllers/issues/656
useContainer(new TsyringeAdapter(container))

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [ UserController ],
});