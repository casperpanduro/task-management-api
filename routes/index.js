var express = require('express');
var rootRouter = express.Router();

var tasks = require('./endpoints/tasks');

rootRouter.use('/tasks', tasks);

module.exports = rootRouter;
