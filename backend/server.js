import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
})

app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on ${PORT} port`.yellow.bold));
