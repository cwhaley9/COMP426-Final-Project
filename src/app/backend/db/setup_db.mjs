import {db} from './db.mjs';

await db.run('CREATE TABLE users (username TEXT PRIMARY KEY, password TEXT)');

db.close()