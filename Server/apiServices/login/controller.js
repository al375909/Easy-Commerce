const loginDao = require('./dao');
const passwordHandler = require('../../middleware/passwordHandler');


module.exports = {
    async login(req, res) { // Recogemos el cliente
        const client = await loginDao.getClientUser(req.query.username);
        console.log("Cliente --> ", req.query.username);
        // En caso de que exista ese cliente, comprobamos las credenciales
        if (client.length === 1) {
            console.log(client);
            // const authentication = await passwordHandler.matchPassword(req.query.password, client.passwd);
            // Si son correcto los credenciales. Se considerla logueado
            if(client[0].passwd === req.query.passwd){
                resultClient = {
                    tipo: "client",
                    username: client[0].username,
                    direccion: client[0].direccion
                }
                res.send(resultClient);
            }else{
                res.send("WRONG_PASSWORD");
            }
        } else { // Recogemos un comercio
            const commerce = await loginDao.getCommerceUser(req.query.username);
            // En caso de que exista ese comercio, comprobamos las credenciales
            if (commerce.length === 1) {
                console.log(commerce[0].passwd);
                //const authentication = await passwordHandler.matchPassword(req.query.password, commerce[0].passwd);
                if(commerce[0].passwd === req.query.passwd){
                    resultCommerce = {
                        tipo: "commerce",
                        username: commerce[0].username,
                        nombretienda: commerce[0].nombretienda,
                        tipocomercio: commerce[0].tipocomercio,
                        altitud: commerce[0].altitud,
                        latitud: commerce[0].latitud,
                        imagen: commerce[0].imagen
                    }
                    res.json(resultCommerce);
                    //res.sendStatus(200);
                }else{
                    res.send("WRONG_PASSWORD");
                }
                /*
                console.log(authentication);
                // Si son correcto los credenciales. Se considerla logueado
                if(authentication){
                    console.log("yeee");
                    resultCommerce = {
                        tipo: "commerce",
                        username: commerce[0].username,
                        nombretienda: commerce[0].nombretienda,
                        tipocomercio: commerce[0].tipocomercio,
                        altitud: commerce[0].altitud,
                        latitud: commerce[0].latitud,
                        imagen: commerce[0].imagen,
                    }
                    res.sendStatus(200);
                    res.send(resultCommerce);
                }*/
            }
        }
        res.send("USER_NOT_EXISTS");
        return;

    }

}
