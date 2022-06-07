//Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

// require controller
const productsController = require('./controllers/products')

// const methodOverride = require("method-override")

//Link CSS========================================
app.use(express.static(__dirname + '/public'));

// Database configuration==================
// Connect to MongoDB Atlas
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//MIDDLEWARE
//GIVE ACCESS TO REQ.BODY
app.use(express.urlencoded({ extended: true }))

//Controllers middleware================
app.use('/products', productsController)


//Middleware that allows delete button to work
// app.use(methodOverride("_method"))

//SEED DATA==============================================
// const productSeed = require('./models/productsSeed')

// app.get('/products/seed', (req, res) => {
//     Product.deleteMany({}, (error, allProducts) => {});

//     Product.create(productSeed, (error, data) => {
// 		res.redirect('/products');
        
//     })
// })

//MAKE SURE PORT IS LISTENING
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`listening on  port ${PORT}`)
})