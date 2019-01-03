import express from 'express';
import { Request, Response } from 'express';
import { setUpMiddleware } from './util/middleware';

const app: express.Application = express();

setUpMiddleware(app);

app.route('/')
  .get(function rootGetHandler(req: Request, res: Response) {
    res.status(200).send('API is running!');
  });

export default app;