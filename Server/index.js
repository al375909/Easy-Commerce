const express = require('express')
const app = express();
var cors = require('cors');
const data = require('./data.json');

var PORT = process.env.PORT || 5000;
/*
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}*/

app.use(cors())

app.get('/', (req, res) => {
 
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!')
 
});