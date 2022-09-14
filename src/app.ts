import express from 'express';
import { connection } from 'mongoose';
import './database';
import { User } from './models/users.model';

export const app = express();

app.use(express.json());

app.get('/users', async (req, res) => {
    const users = await User.find({});

    res.send(users);
})