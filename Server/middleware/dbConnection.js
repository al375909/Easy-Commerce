const Pool = require("pg").Pool;

const pool = new Pool({
  user: "uunsxlebscw6d7fec3tw",
  host: "bhafapey0pwu98xcw8yg-postgresql.services.clever-cloud.com",
  database: "bhafapey0pwu98xcw8yg",
  password: "qByDX0s7XrLuaijsWEwG",
  port: 5432,
});

module.exports.pool = pool;