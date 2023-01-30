const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const PRODUCTS   = require('./routes/products');

app.use(cors());
app.use(express.json());

const uri = process.env.DB_URL;
mongoose.connect(uri, { useNewUrlParser: true }); 

mongoose.connection
  .once('open', () => console.log("Mongo database connection works!"))
  .on('error', error => {
    console.log("Erro -> ", error);
  });

app.use('/products', PRODUCTS);

app.listen(PORT, () => {
    console.log(`Server running at port:${PORT}`);
});

