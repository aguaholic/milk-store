import express, { Request, Response, Application } from 'express';
import * as db from './db.json';

const app: Application = express();
app.use(express.json());

app.get('/api/hello', (_req: Request, res: Response) => {
  return res
    .status(200)
    .json({ test: 'it works as it should' });
});

app.get('/api/milk', (_req: Request, res: Response) => {
  return res
    .status(200)
    .json({ db: db });
});

export default app;
