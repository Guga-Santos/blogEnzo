import express from 'express';
import 'express-async-errors';
import User from './routes/user.route.js';

const app = express();
app.use(express.json());

app.use('/user', User);

export default app;