import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db.mjs';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/api/users', async (req, res) => { 
    let users = await db.all("SELECT * FROM users");
    res.json(users);
});

app.post('/api/users', async (req, res) => {
    console.log("post user");
    let username = req.body.username;
    let password = req.body.password;

    let user = await db.run("INSERT INTO nodes (username, password) VALUES (?, ?)", [username, password]);
    res.json(user);
})