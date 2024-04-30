import {db} from './db.mjs';

await db.run('CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT)');

db.close()