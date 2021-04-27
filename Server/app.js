var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var dao = require("./apiServices/commerce/dao");
var cors = require("cors");
const session = require("express-session");
const passport = require('passport');

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Client/build")));
app.use(passport.initialize());
app.use(passport.session());

/*app.use(
  session({
    resave: true,
    saveUninitialized: true,
  })
);*/

// app.get('/home', (req, res) => {
//     res.send("la de dios");
// });

// app.get('/tiendas/listado', async (req, res) => {
//     const list = await dao.listCommerce();
//     console.log(list);
//     res.send(list);
// });

app.use("/api", indexRouter);

module.exports = app;
