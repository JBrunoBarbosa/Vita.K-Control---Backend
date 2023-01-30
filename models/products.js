const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({    

    name: {
        type: String, 
        required: true,
    },

    productQuantity: {
        type: String, 
        required: true,
    },

    vitaminQuantity: {
        type: String, 
        required: true,
    },

    createdAt: { 
        type: Date, 
        default: Date.now
    },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;