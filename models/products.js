const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productsSchema = new Schema(
    {
        name: {type: String, required: true},
        description:  {type: String, required: true},
        img: String,
        price: Number,
        qty: Number 
    }
)

const Product = mongoose.model('Product', productsSchema);

module.exports =  Product;

