const Sequelize = require('sequelize');

const db = require('../config/db');

const Visitor = db.define('visitor', {
    id: {type: Sequelize.INTEGER, primaryKey: true},
    ip: {type: Sequelize.STRING(15)},
    uri: {type: Sequelize.STRING(64)},
    agent: {type: Sequelize.STRING},
    referer: {type: Sequelize.STRING},
    time: {type: Sequelize.DATE},
    location: {type: Sequelize.STRING}
}, {
    timestamps: false,
    tableName: 'visitor'
});

module.exports = Visitor;