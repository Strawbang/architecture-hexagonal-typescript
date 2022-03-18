import 'reflect-metadata';
import express from 'express';
import { useContainer, useExpressServer } from 'routing-controllers';
import { container } from 'tsyringe';
import UserController from '../application/UserController';
import TsyringeAdapter from '../application/TsyringeAdapter';
export const app = express();

// https://github.com/typestack/routing-controllers/issues/656
useContainer(new TsyringeAdapter(container))

useExpressServer(app, {
  routePrefix: '/api',
  controllers: [ UserController ],
});