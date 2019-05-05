const categoryController = require('../controllers').category;
console.log('categoryController', categoryController);
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to shopmate',
    }));

    app.post('/api/category', categoryController.create);
};