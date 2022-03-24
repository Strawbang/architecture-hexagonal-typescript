import {Sequelize} from 'sequelize-typescript';

export const sequelize =  new Sequelize({
  database: 'db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  repositoryMode: true,
  models: [__dirname + '/**/*Model.ts']
});