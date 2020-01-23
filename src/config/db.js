const Sequelize = require('sequelize')

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.NAME_DATABASE, process.env.USERNAME_DATABASE, process.env.PASSWORD_DATABASE, {
  host: process.env.HOST_DATABASE,
  port: process.env.PORT_DATABASE,
  dialect: 'postgres'
})

module.exports = sequelize