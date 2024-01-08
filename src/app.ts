import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080, () => {
  console.log('Started! ');
});