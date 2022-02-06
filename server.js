import express from 'express';
import fetch from 'node-fetch';

import { API_URL, WELCOME_MSG, APP_NAME } from './constants.js';
import { getUsersIn50MilesGPS } from './helpers.js';

const app = express();
const port = 3000;

const usersListedLivingInLondon = await fetch(
  `${API_URL}/city/London/users`,
).then((data) => data.json());

const usersData = await fetch(`${API_URL}/users`).then((data) => data.json());
const usersIn50MilesGPS = getUsersIn50MilesGPS(usersData);

app.get('/listed', (req, res) => {
  res.json(usersListedLivingInLondon);
});

app.get('/gps50miles', async (req, res) => {
  res.json(usersIn50MilesGPS);
});

app.listen(port, () => {
  console.log(`${APP_NAME} listening on port ${port}.`);
  console.log(WELCOME_MSG);
});
