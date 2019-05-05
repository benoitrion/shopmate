const Product = require('../models').Product;
module.exports = {
    create(req, res) {
        return Product
            .create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                discounted_price: req.body.discounted_price,
                image: req.body.image,
                image_2: req.body.image_2,
                thumbnail: req.body.thumbnail,
                display: req.body.display,
            })
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error));
    },
    findAll(req, res) {
        return Product
            .findAll()
            .then(products => res.status(201).send(products))
            .catch(error => res.status(400).send(error));
    },
    findOne(req, res) {
        return Product
            .findOne({ where: { id: req.params.id  }, })
            .then(products => res.status(201).send(products))
            .catch(error => res.status(400).send(error));
    }
};