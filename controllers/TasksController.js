const db = require('../db');
const { Task } = db.models;
const { Op } = db.Sequelize;


// Get all tasks
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

// Create task
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
	
// Get task by id
const getTaskById = async(id) => {
	await db.sequelize.sync();
	try {
		const task = await Task.findByPk(id);
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
// Update task by id
const updateTask = async(id, data) => {
	await db.sequelize.sync();
	try {
		const task = await Task.findByPk(id);
		task.update(data);
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

const deleteTask = async(id) => {
	await db.sequelize.sync();
	try {
		const task = await Task.findByPk(id);
		task.destroy();
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

// Delete task by id

module.exports = {
	getTasks,
	createTask,
	getTaskById,
	updateTask,
	deleteTask
}