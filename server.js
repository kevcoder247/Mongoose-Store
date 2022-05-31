// require dependencies
const express = require('express');
// const methodOverride = require("method-override")

// initialize express application
const app = express();

// configure application settings
const port = 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }))

//Middleware that allows delete button to work
// app.use(methodOverride("_method"))

//Rouses
//INDEX=========================================================
app.get('/', (req, res) => {
    res.send('index route working');
});

app.listen(port, () => {
    console.log(`listening on  port ${port}`)
})