const db = require('../db');
const asyncSequelize = (cb) =>  {
	return async () => {
		try {
			await db.sequelize.sync();
			await cb();
		} catch(err) {
			if (err.name === 'SequelizeValidationError') {
		      	const errors = err.errors.map(error => error.message);
	    		next(err);
		    } else {
		    	next(err);
		    }
			
		}
	}
}
exports.asyncSequelize = asyncSequelize;