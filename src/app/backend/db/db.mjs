import {Database} from 'sqlite-async';

export let db = await Database.open('src/app/backend/db/db.sqlite');