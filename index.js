const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();


//middleware
app.use( express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/products', productRoute);

mongoose.connect('mongodb+srv://coelhocassi:Dna5XNP4FpS0337h@backenddb.wxafe.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected to the database!');
    app.listen(3000, () => {
         console.log('Server is running on port 3000');  
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });