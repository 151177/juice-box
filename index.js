const express = require('express');
const server = express();
require("dotenv").config();

const morgan = require('morgan');
// morgan('dev'), is a function which
// logs out the incoming requests
// ex: GET /api/users 304 19.825 ms - -
server.use(morgan('dev'));
// express.json(), is a function which
// will read incoming JSON from requests
server.use(express.json())

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

// we want to keep middleware above router
// to parse data before running to routes
const apiRouter = require('./api');
server.use('/api', apiRouter);


const { client } = require('./db');
client.connect();



const { PORT } = process.env;
server.listen(PORT, () => {
  console.log(`The server is up on port ${PORT}`)
});