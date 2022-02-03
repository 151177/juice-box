// we can require and attach it to an apiRouter
const express = require('express');
const apiRouter = express.Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

module.exports = apiRouter;