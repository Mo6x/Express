const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRouters = require('./router/shop');

app.use(bodyParser.urlencoded({ extends: false }));

app.use('/admin', adminRoutes);
app.use(shopRouters);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}) 

app.listen(4000);