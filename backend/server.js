import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
})

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT} port`.yellow.bold));
