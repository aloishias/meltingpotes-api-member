const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Member = db.define('Member', {
    member_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    member_firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    member_lastname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    member_phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    member_email: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Member.sync()


module.exports = Member
