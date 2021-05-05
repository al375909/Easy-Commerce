const signupDao = require('./dao');
const passwordHandler = require('../../middleware/passwordHandler');


module.exports = {
<<<<<<< HEAD
    signupCommerce: async function(req, res){
        const commerce = await signupDao.getCommerceUser(req.body.username);
        if(commerce.lenght > 0){ // Si existe algún usuario con ese nombre, no debemos dejar que se cree.
=======
    signupCommerce: async function (req, res) {
        const commerce = signupDao.getCommerceUser(req.body.username);
        if (commerce.lenght > 0) { // Si existe algún usuario con ese nombre, no debemos dejar que se cree.
>>>>>>> main
            res.send(400);
        } else {
            newUser = {
                username: req.body.username,
                passwd: req.body.passwd,
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email
            }

            await signupDao.createUser(newUser);

            /*const comprobacion = signupDao.getUser(newUser.username);
            if(comprobacion.lenght === 0){
                console.log("Putada");
                res.send("Cagada bro");
                return;
            }*/


            newCommerce = {
                username: req.body.username,
                cif: req.body.cif,
                nombretienda: req.body.nombretienda,
                tipocomercio: req.body.tipocomercio,
                altitud: req.body.altitud,
                latitud: req.body.latitud,
                calificacion: 0.0,
                imagen: req.body.imagen
            }


            await signupDao.createCommerce(newCommerce);
            res.sendStatus(201);

        }
    },
<<<<<<< HEAD
    signupClient: async function(req, res){
        const client = await signupDao.getClientUser(req.body.username);
        if(client.lenght > 0){
=======
    signupClient: async function (req, res) {
        const client = signupDao.getClientUser(req.body.username);
        if (client.lenght > 0) {
>>>>>>> main
            res.send(400);
        } else {
            newUser = {
                username: req.body.username,
                passwd: req.body.passwd,
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email
            }
<<<<<<< HEAD
            await signupDao.createUser(newUser);

            /*const comprobacion = await signupDao.getUser(newUser.username);

            console.log(comprobacion);
            if(comprobacion.lenght === 0){
                res.sendStatus(500);
                return;
            }*/
=======
            signupDao.createUser(newUser);

>>>>>>> main

            newClient = {
                username: req.body.username,
                nif: req.body.nif,
                direccion: req.body.direccion
            }

            await signupDao.createClient(newClient);

            res.sendStatus(201);
        }
    }
}
