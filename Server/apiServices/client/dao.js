const pool = require('../../middleware/dbConnection').pool;


const listCommerce = async () => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

}


module.exports.listCommerce = listCommerce;