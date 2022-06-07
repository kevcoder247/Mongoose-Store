const express = require('express');
const { findByIdAndDelete } = require('../models/product');
const Product = require('../models/product');
const router = express.Router();



//SEED DATA==============================================
const productSeed = require('../models/productsSeed')

router.get('/products/seed', (req, res) => {
    Product.deleteMany({}, (error, allProducts) => {});

    Product.create(productSeed, (error, data) => {
		res.redirect('/products');
        
    })
})

//INDEX============================
router.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        });
    });
});

//NEW=================================
router.get('/new', (req, res) => {
    res.render('new.ejs');
})
//DELETE===============================
router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id, (error, data) => {
        res.redirect('/products')
    })
})
//UPDATE
router.put('/:id', (req, res)=>{
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        },
        (error, updatedProduct)=>{
            res.redirect(`/products/${req.params.id}`);
        }
    );
});

//CREATE=================================
router.post('/new', (req, res) => {
    Product.create(req.body, (error, newProduct) => {
        res.redirect('/products')
    })
})

//EDIT====================================
router.get('/:id/edit', (req, res) => {
   Product.findById(req.params.id, (error, foundProduct) => {
       res.render('edit.ejs', {
           product: foundProduct,
       })
   })
})

//SHOW===================================
router.get('/:id', (req, res) => {
    Product.findById(req.params.id, (err, product) => {
        res.render('show.ejs', {
            product
        })
    })
})


module.exports = router;