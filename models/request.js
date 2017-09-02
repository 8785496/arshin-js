const Sequelize = require('sequelize');

const db = require('../config/db');

module.exports = db.define('request', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  email: Sequelize.STRING(64),
  type_object: Sequelize.STRING(64),
  type_work: Sequelize.STRING(64),
  name: Sequelize.STRING(64),
  phone: Sequelize.STRING(32),
  target: Sequelize.STRING(64),
  adress: Sequelize.STRING(64),
  size: Sequelize.STRING(32),
  description: Sequelize.TEXT,
  folder: Sequelize.STRING(32),
  files: Sequelize.TEXT,
  time: Sequelize.DATE,
}, {
  timestamps: false,
  freezeTableName: true
});