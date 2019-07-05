const Sequelize = require('sequelize');

const sequelize = new Sequelize('mawingun_mpesa', 'root', '', { host: '127.0.0.1', dialect: 'mysql', operatorAliases:false});

module.exports = sequelize;
global.sequelize = sequelize;