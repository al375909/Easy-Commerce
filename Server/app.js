var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dao = require('./apiServices/commerce/dao')
//var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger('dev'));
//app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Client/build')));

app.get('/home', (req, res) => {
    res.send("la de dios");
});

app.get('/tiendas/listado', async (req, res) => {
    const list = await dao.listCommerce();
    console.log(list);
    res.send(list);
});


app.use('/tiendas/listado', indexRouter);

module.exports = app;
