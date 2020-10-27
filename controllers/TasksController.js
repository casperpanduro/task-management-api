const db = require('../db');
const { Task } = db.models;
const { Op } = db.Sequelize;


// Get all tasks
// const getTasks = asyncSequelize = (async () => {
// 	const tasks = await Task.findAll();
// 	return tasks;
// });

const getTasks = async () => {
	await db.sequelize.sync();
	try {
		const tasks = await Task.findAll();
		const tasksJSON = tasks.map(task => task.toJSON());
		return tasksJSON;
	} catch(err) {
		return err;
	}
}

const createTask = async (data) => {
	await db.sequelize.sync();
	try {
		const task = await Task.create(data);
		return task.toJSON();
	} catch(err) {
		if (err.name === 'SequelizeValidationError') {
	      	let errors = err.errors.map(error => error.message);
	      	errors.error = errors;
    		return errors;
	    } else {
	    	return err;
	    }
	}
}
	
// Create task
// Get task by id
// Update task by id
// Delete task by id

module.exports = {
	getTasks,
	createTask
}