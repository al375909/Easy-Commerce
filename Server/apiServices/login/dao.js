const pool = require('../../middleware/dbConnection').pool;

const getCommerceUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM comercio as c JOIN usuario as u using(username) where c.username = $1; ", [username])
                    .catch(err => console.log('Error ejecutando la consulta de loginComerce', err.stack));
    client.release();
    return result.rows;
};

const getClientUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM cliente as c JOIN usuario as u using(username) where c.username = $1;", [username])
                        .catch(err => console.log('Error ejecutando la consulta de loginClient ', err.stack));
    client.release();
    return result.rows;
}

module.exports.getCommerceUser = getCommerceUser;
module.exports.getClientUser = getClientUser;