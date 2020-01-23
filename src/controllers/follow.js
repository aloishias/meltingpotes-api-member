const Follow = require('../model/Follow.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {
        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Follow.findAll({
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getById(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Follow.findAll({
                where: {
                    follow_id: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getFollowByFollowMemberId(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Follow.findAll({
                where: {
                    follow_memberid: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    getFollowByFollowingMemberId(req, res) {
        const q = req.query
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Follow.findAll({
                where: {
                    follow_followingmemberid: id
                },
                offset,
                limit
            })
            .then(cas => {
                if (!cas) res.sendStatus(404)
                else res.status(200).send(cas)
            })
            .catch(err => res.status(500).send(err))
    },

    createFollow(req, res) {
        const follow_memberid = req.body.follow_memberid
        const follow_followingmemberid = req.body.follow_followingmemberid

        // Create a new user
        Follow.create({
            follow_memberid: follow_memberid,
            follow_followingmemberid: follow_followingmemberid
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateFollow(req, res) {
        const id = req.params.id
        const follow_memberid = req.body.follow_memberid
        const follow_followingmemberid = req.body.follow_followingmemberid

        Follow.update({
            follow_memberid: follow_memberid,
            follow_followingmemberid: follow_followingmemberid
        }, {
            where: {
                follow_id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyFollow(req, res) {
        const id = req.params.id

        if (!validateUUID(id))
            return res.sendStatus(400)


        Follow.destroy({
            where: {
                follow_id: id
            }
        }).then(() => res.sendStatus(204))
        .catch(err => res.status(500).send(err));
    }

}