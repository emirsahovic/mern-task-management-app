import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Task Management API');
})

app.listen(PORT, () => console.log(`Server running on ${PORT} port`.yellow.bold));
