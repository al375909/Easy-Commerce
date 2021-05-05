const pool = require('../../middleware/dbConnection').pool;

const getCommerceUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM comercio as c JOIN usuario as u using(username) where c.username = $1; ", [username])
                    .catch(err => console.log('Error ejecutando la consulta de getCommerceUser', err.stack));
    client.release();
    return result.rows;
};

const getClientUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM cliente as c JOIN usuario as u using(username) where c.username = $1;", [username])
                        .catch(err => console.log('Error ejecutando la consulta de getClientUser ', err.stack));
    client.release();
    return result.rows;
}

const getUser = async (username) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    const result = await client.query("SELECT * FROM usuario where username = $1" , [username])
    .catch(err=> console.log('Error ejecutando la consulta de getUser ' , err.stack));
    client.release();
    return result.rows;
}


const createUser = async(user) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

    await client.query("INSERT INTO usuario (username, passwd, nombre, apellidos, email) VALUES ($1, $2, $3, $4, $5);"
    , [user.username, user.passwd, user.nombre, user.apellidos, user.email])
    .catch(err => console.log('Error ejecutando la consulta de crear usuario', err.stack));
    client.release();
    return;
}

const createCommerce = async (commerceUser) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));

    await client.query("INSERT INTO comercio (username, cif, nombretienda, tipocomercio, altitud, latitud, calificacion, imagen) VALUES($1, $2, $3, $4, $5, $6, $7, $8);"
                            , [commerceUser.username, commerceUser.cif, commerceUser.nombretienda, commerceUser.tipocomercio, commerceUser.altitud,
                            commerceUser.latitud, commerceUser.calificacion, commerceUser.imagen])
                            .catch(err => console.log("Error al crear un comercio ", err.stack));
    client.release();
    return;
};

const createClient = async (clientUser) => {
    const client = await pool.connect().catch(err => console.log('Error ejecutando la conexión ', err.stack));
    await client.query("INSERT INTO cliente (username, nif, direccion) VALUES($1, $2, $3)", [clientUser.username, clientUser.nif, clientUser.direccion])
                    .catch(err => console.log('Error ejecutando la consulta de crear cliente', err.stack));
    client.release();
    return;
};

module.exports.createClient = createClient;
module.exports.createCommerce = createCommerce;
module.exports.getCommerceUser = getCommerceUser;
module.exports.getClientUser = getClientUser;
module.exports.createUser = createUser;
module.exports.getUser = getUser;