const express = require('express')
const app = express();

var PORT = process.env.PORT || 5000;

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}


app.get('/', (req, res) => {
  response.json({ 
    anObject: { item1: "item1val", item2: "item2val" }, 
    anArray: ["item1", "item2"], 
    another: "item"
  });
});

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!')
});