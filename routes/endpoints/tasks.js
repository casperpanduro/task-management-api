const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../middleware/async-handler');

const TaskController = require('../../controllers/TasksController');

router.get('/', asyncHandler(async (req, res) => {
	let tasks = await TaskController.getTasks();
	res.json(tasks);
}));

router.post('/', asyncHandler(async (req, res) => {
	let task = await TaskController.createTask(req.body);
	res.json(task);
}));

module.exports = router;