const Sequelize = require('sequelize');

const db = require('../config/db');

module.exports = db.define('visitor', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  ip: Sequelize.STRING(15),
  uri: Sequelize.STRING(64),
  agent: Sequelize.TEXT,
  referer: Sequelize.TEXT,
  time: Sequelize.DATE,
  location: Sequelize.TEXT
  // ip: {type: Sequelize.STRING(15)},
  // uri: {type: Sequelize.STRING(64)},
  // agent: {type: Sequelize.STRING},
  // referer: {type: Sequelize.STRING},
  // time: {type: Sequelize.DATE},
  // location: {type: Sequelize.STRING}
}, {
  timestamps: false,
  //tableName: 'visitor',
  freezeTableName: true
});
