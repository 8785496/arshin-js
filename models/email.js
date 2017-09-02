const Sequelize = require('sequelize');

const db = require('../config/db');

module.exports = db.define('email', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  email: Sequelize.STRING(128),
  name: Sequelize.STRING(128),
  subject: Sequelize.STRING(64),
  body: Sequelize.TEXT,
  time: Sequelize.DATE
}, {
  timestamps: false,
  freezeTableName: true
});