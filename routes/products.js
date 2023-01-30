const router = require('express').Router();
let Products = require('../models/products');

router.route('/').get((req, res) => {
    Products.find()
        .then(compras => res.json(compras))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {

    const products = req.body;
    const newProducts = new Products (products);

    newProducts.save()
        .then(compras => res.json('Food Added'))
        .catch(err => res.status(400).json('Error post: ' + err))

});

router.route('/delete/:id').delete((req, res) => {
    Products.findByIdAndRemove(req.params.id)
        .then(compras =>  res.json('removed'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;