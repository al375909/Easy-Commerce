const express = require("express");
const app = express();


var path = require("path");
var cors = require("cors");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "uunsxlebscw6d7fec3tw",
  host: "bhafapey0pwu98xcw8yg-postgresql.services.clever-cloud.com",
  database: "bhafapey0pwu98xcw8yg",
  password: "qByDX0s7XrLuaijsWEwG",
  port: 5432,
});



var PORT = process.env.PORT || 5000;


var indexRouter = require('./routes/index');

app.use('/', indexRouter);
app.use(cors());
app.use(express.static(path.join(__dirname, "Client/build")));

const fun = async () => {
  const client = await pool.connect();

  const result = await client.query({
    text: "SELECT * FROM comercio; ",
  });

  await client.end();
  return result.rows;
};

app.get("/", async (req, res) => {
  const q = await fun();
  console.log(q);
  res.send(q);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/Client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("Example app listening on port 5000!");
});
