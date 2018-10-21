import express, { json } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const jsonParser = express.json;

export const setUpMiddleware = function establishGlobalMiddlewareQueue(app: express.Application) {
  app.use(cors());
  app.use(helmet());
  app.use(jsonParser());
  app.use(morgan('dev'));
}