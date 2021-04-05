const express = require('express');
const app = express();
var path = require("path");
var cors = require("cors");

var PORT = process.env.PORT || 5000;


var indexRouter = require('./routes/index');

// Linkeamos el router con el app
app.use('/', indexRouter);
app.use(cors());
app.use(express.static(path.join(__dirname, "Client/build")));

/*

--- Por defecto ---
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});
*/
module.exports = app;

app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
