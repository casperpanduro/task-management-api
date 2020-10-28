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

router.get('/:id', asyncHandler(async (req, res) => {
	let task = await TaskController.getTaskById(req.params.id);
	res.json(task);
}));

router.put('/:id', asyncHandler(async (req, res) => {
	let task = await TaskController.updateTask(req.params.id, req.body);
	res.json(task);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
	let task = await TaskController.deleteTask(req.params.id);
	res.json().end();
}));

module.exports = router;