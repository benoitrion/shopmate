const Category = require('../models').Category;
module.exports = {
    create(req, res) {
        return Category
            .create({
                name: req.body.name,
                description: req.body.description,
            })
            .then(category => res.status(201).send(category))
            .catch(error => res.status(400).send(error));
    },
};