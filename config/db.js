const Sequelize = require('sequelize');

const sequelize = new Sequelize('bti', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    timezone: 'Asia/Novosibirsk'
});

module.exports = sequelize;