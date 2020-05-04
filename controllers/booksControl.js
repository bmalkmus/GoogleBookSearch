const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: -1})
            .then (results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Book
            .findById(req.params.id)
            .then(results => res.json(results))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(results => res.json(results))
            .catch(err => status(422).json(err));
    },
    remove: function (req, res) {
        db.Book
            .findById({_id: req.params.id})
            .then(results => results.remove())
            .then(database => res.json(database))
            .catch (err => status(422).json(err));
    }
};