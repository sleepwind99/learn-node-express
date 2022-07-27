const express = require('express');
const app = express();
const customerRoute = require('./route/customer');
const productRoute = require('./route/product');
const port = 3000;

app.use(express.json({
    limit: '50mb'
}))

app.listen(port, () => {
    console.log('Server started. port 3000.');
});

app.use('/customer', customerRoute);
app.use('/product', productRoute);