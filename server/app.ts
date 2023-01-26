import { count } from 'console';
import express, { Request, Response, Application } from 'express';
import * as db from './db.json';

interface Filtered {
  name: string,
  type: string,
  storage: number,
  id: string,
}

const app: Application = express();
app.use(express.json());

app.get('/api/hello', (_req: Request, res: Response) => {
  return res
    .status(200)
    .json({ test: 'it works as it should' });
}); ''

app.get('/api/milk', (req: Request, res: Response) => {
  try {
    const filter = req.query.filter as string;
    const searchQuery = req.query.search as string || '';

    let response = db;

    if (filter) {
      const adjustedFilter = filter.replace('-', ' ').toLowerCase();
      const dbItems = db.results.map(item => item);
      const filtered = dbItems.filter(item => item.type.toLowerCase() === adjustedFilter);
      response = {
        count: 99,
        results: filtered,
      }
    }

    if (searchQuery) {
      const adjustedQuery = searchQuery.replaceAll('-', ' ').toLowerCase();
      const regex = new RegExp(adjustedQuery, 'i');

      const dbItems = db.results.map(item => item);
      const filteredQuery = dbItems.filter(item => item.name.match(regex));

      response = {
        count: 99,
        results: filteredQuery,
      }
    }

    res
      .status(200)
      .json({ db: response });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: true, message: 'Server error' })
  }
});
// app.get('/api/milk', (_req: Request, res: Response) => {
//   return res
//     .status(200)
//     .json({ db: db });
// });
// const page = parseInt(req.query.page as string) - 1 || 0;
// const limit = parseInt(req.query.limit as string) || 5;
// const searchQuery = req.query.search as string || '';
// let  sort = req.query.sort as string || ''; maybe sort by storage
export default app;
