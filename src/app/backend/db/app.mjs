import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db.mjs';
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200', 
    optionsSuccessStatus: 200
};
  
app.use(cors(corsOptions));
  
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/api/users', async (req, res) => { 
    let users = await db.all("SELECT * FROM users");
    res.json(users);
});

app.post('/api/users/authenticate', async (req, res) => { 
    let username = req.body.username;
    let password = req.body.password;

    let user = await db.get("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]);
    res.json(user);
});

app.post('/api/users', async (req, res) => {
    console.log("post user");
    let username = req.body.username;
    let password = req.body.password;

    let user = await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [username, password]);
    res.json(user);
})

app.put('/api/users/:username', async (req, res) => { 
    let username = req.params.username;
    let password = req.body.password;
    
    if(username){
        let user = await db.run("UPDATE users SET username = ?, password = ? WHERE username = ?", [username, password, username]);
        res.json(user);
    } else {
        res.status(400).send("username is null or undefined");    
    }  
});

app.delete('/api/users/:username', async (req, res) => {
    let username = req.params.username;

    if(username){
        await db.run("DELETE FROM users WHERE username = ?", [username]);
        res.send(`User with username '${username}' deleted!`);
    } else {
        res.status(400).send("username is null or undefined");
    }
});

app.get('/api/users/exists/:username', async (req, res) => {
    let username = req.params.username;

    let user = await db.get('SELECT * FROM users WHERE username = ?', [username]);

    if (user) {
        res.json({ exists: true });
    } else {
        res.json({ exists: false });
    }
});


