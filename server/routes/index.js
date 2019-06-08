const productController = require('../controllers').product;
const categoryController = require('../controllers').category;
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to shopmate',
    }));
    app.post('/api/category', categoryController.create);

    app.post('/api/product', productController.create);
    app.get('/api/products', productController.findAll);
    app.get('/api/products/:id', productController.findOne);
};
