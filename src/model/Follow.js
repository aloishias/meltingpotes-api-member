const Sequelize = require('sequelize')
const db = require('../config/db.js')

// Model definition
const Follow = db.define('Follow', {
    follow_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4()
    },
    follow_memberid: {
        type: Sequelize.UUID,
        allowNull: false
    },
    follow_followingmemberid: {
        type: Sequelize.UUID,
        allowNull: false
    }
})

Follow.sync()


module.exports = Follow
