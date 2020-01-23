var express = require('express')
var router = express.Router()

const followController = require('../controllers/follow.js')

router.get('/follows', followController.list)
router.get('/follows/:id', followController.getById)
router.get('/followByMemberId/:id', followController.getFollowByFollowMemberId)
router.get('/followingByMemberId/:id', followController.getFollowByFollowingMemberId)
router.post('/follows', followController.createFollow)
router.put('/follows/:id', followController.updateFollow)
router.delete('/follows/:id', followController.destroyFollow)

module.exports = router