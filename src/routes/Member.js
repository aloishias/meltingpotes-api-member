var express = require('express')
var router = express.Router()

const memberController = require('../controllers/member.js')

router.get('/members', memberController.list)
router.get('/members/:id', memberController.getById)
router.post('/members', memberController.createMember)
router.put('/members/:id', memberController.updateMember)
router.delete('/members/:id', memberController.destroyMember)

module.exports = router