const express = require('express');
const Product = require('../models/product');
const router = express.Router();


//INDEX============================
router.get('/', (req, res) => {
    Product.find({}, (error, allProducts) => {
        res.render('index.ejs', {
            products: allProducts,
        });
    });
});

//NEW
router.get('new', (req, res) => {
    res.render('new.ejs');
})
//DELETE
//UPDATE

//CREATE=================================
// router.post('/new', (req, res) => {
//     res.render('new.ejs');
// })

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