const express = require('express')
const app = express();
var cors = require('cors');


const Pool = require('pg').Pool
const pool = new Pool({
  user: 'uunsxlebscw6d7fec3tw',
  host: 'bhafapey0pwu98xcw8yg-postgresql.services.clever-cloud.com',
  database: 'bhafapey0pwu98xcw8yg',
  password: 'qByDX0s7XrLuaijsWEwG',
  port: 5432,
});



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

const fun = async () => {

  const client = await pool.connect()
  const result = await client.query({
    text: 'SELECT * FROM comercio; ',
  })

  
  await client.end()
  return result.rows

}


app.get('/', async (req, res) => {
  const q= await fun();
  console.log(q)
  res.send(q)
})

app.listen(PORT, () => {
  console.log('Example app listening on port 8000!')

});