const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'tasks.db',
  logging: false
});

const db = {
  sequelize,
  Sequelize,
  models: {},
};

db.models.Task = require('./models/tasks.js')(sequelize);

module.exports = db;