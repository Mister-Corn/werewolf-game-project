import express from 'express';
import { setUpMiddleware } from './util/middleware';
const app: express.Application = express();

setUpMiddleware(app);

export default app;