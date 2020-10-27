const Sequelize = require('sequelize');

module.exports = (sequelize) => {
	class Task extends Sequelize.Model {}
	Task.init({
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		    autoIncrement: true,
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false,
			validate: {
				notNull: {
					msg: 'title cannot be null'
				},
				notEmpty: {
		          msg: 'title cannot be empty',
		        },
			}
		}
	}, {sequelize});
	return Task;
}