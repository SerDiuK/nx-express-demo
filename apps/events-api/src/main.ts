/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import { join } from 'path';
import { json, urlencoded } from 'body-parser';
import { eventsController } from '@nx-demo/api/events-api';
const router = express.Router();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/assets', express.static(join(__dirname, 'assets')));

eventsController(router);

app.use('/events-api', router);

const port = process.env.port || 3334;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/events-api`);
});
server.on('error', console.error);
