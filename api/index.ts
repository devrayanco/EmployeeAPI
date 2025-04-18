import express, { Request, Response } from 'express';
import cors from 'cors';
import { NowRequest, NowResponse } from '@vercel/node';
import userRoutes from '../src/routes/auth.routes';
import employeeRoutes from '../src/routes/employee.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Bem-vindo ao meu backend!');
});

app.use('/api/auth', userRoutes);
app.use('/api/employees', employeeRoutes);

export default async (req: NowRequest, res: NowResponse) => {
  await app(req, res);
};