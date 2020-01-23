const Member = require('../model/Member.js')
const validateUUID = require('uuid-validate')

module.exports = {
    list(req, res) {
        const q = req.query

        // Default limit to 50
        const offset = parseInt(q.offset) || 0
        const limit = parseInt(q.limit) || 50

        Member.findAll({
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

        Member.findAll({
                where: {
                    member_id: id
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

    createMember(req, res) {
        const member_firstname = req.body.member_firstname
        const member_lastname = req.body.member_lastname
        const member_phone = req.body.member_phone
        const member_email = req.body.member_email

        // Create a new user
        Member.create({
            member_firstname: member_firstname,
            member_lastname: member_lastname,
            member_phone: member_phone,
            member_email: member_email
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(201).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    updateMember(req, res) {
        const id = req.params.id
        const member_firstname = req.body.member_firstname
        const member_lastname = req.body.member_lastname
        const member_phone = req.body.member_phone
        const member_email = req.body.member_email

        Member.update({
            member_firstname: member_firstname,
            member_lastname: member_lastname,
            member_phone: member_phone,
            member_email: member_email
        }, {
            where: {
                member_id: id
            }
        }).then(cas => {
            if (!cas) res.sendStatus(404)
            else res.status(200).send(cas)
        }).catch(err => res.status(500).send(err))
    },

    destroyMember(req, res) {
        const id = req.params.id
        const q = req.query

        if (!validateUUID(id))
            return res.sendStatus(400)


        Member.destroy({
            where: {
                member_id: id
            }
        }).then(() => res.sendStatus(204))
        .catch(err => res.status(500).send(err));
    }

}