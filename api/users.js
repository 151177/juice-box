const express = require("express");
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log("A request is being made to /users");

    // res.send({message: "Hello from /users!"})
    next();
});

// usersRouter.get('/', (req, res) => {
//     res.send({
//         users: []
//     });
// });

// NEW
const { getAllUsers } = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users
  });
});
// now we need to connect our client, so go
// back into the main index and add
// const { client } = require('./db');
// client.connect();



module.exports = usersRouter;