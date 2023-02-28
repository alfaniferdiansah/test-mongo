const express = require('express');
const router = require('./app/productv1');
const app = express();

app.use(express.json());
app.use('/api/v3', router);

app.listen(3005, () => {
    console.log('the project run onto port 3005 has started');
})