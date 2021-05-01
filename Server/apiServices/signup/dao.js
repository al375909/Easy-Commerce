const pool = require('../../middleware/dbConnection').pool;


const createCommerce = async (commerce) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("", [username])
                    .catch(err => console.log('Error ejecutando la consulta de loginComerce', err.stack));
    client.release();
    return result.rows;
};

const createClient = async (client) {

};

module.exports.createClient = createClient;
module.exports.createCommerce = createCommerce;
