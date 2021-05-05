const signupDao = require('./dao');
const passwordHandler = require('../../middleware/passwordHandler');


module.exports = {
<<<<<<< HEAD
    async signupCommerce(req, res){
=======
    signupCommerce: async function(req, res){
>>>>>>> origin/Carlos
        const commerce = signupDao.getCommerceUser(req.body.username);
        if(commerce.lenght > 0){ // Si existe algún usuario con ese nombre, no debemos dejar que se cree.
            res.send(400);
        }else{
<<<<<<< HEAD

        }
    },
    async signupClient(req, res){
=======
            newUser = {
                username: req.body.username,
                passwd: req.body.passwd,
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email,
            }

            signupDao.createUser(newUser);

            newCommerce = {
                username: req.body.username,
                cif: req.body.cif,
                nombretienda: req.body.nombretienda,
                tipocomercio: req.body.tipocomercio,
                altitud: req.body.altitud,
                latitud: req.body.latitud,
                calificacion: 0.0,
                imagen: req.body.imagen,
            }


            signupDao.createCommerce(newCommerce);
            res.sendStatus(201);

        }
    },
    signupClient: async function(req, res){
>>>>>>> origin/Carlos
        const client = signupDao.getClientUser(req.body.username);
        if(client.lenght > 0){
            res.send(400);
        }else{
<<<<<<< HEAD
            
=======
            newUser = {
                username: req.body.username,
                passwd: req.body.passwd,
                nombre: req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email,
            }
            signupDao.createUser(newUser);
            

            newClient = {
                username: req.body.username,
                nif: req.body.nif,
                direccion: req.body.direccion,
            }

            signupDao.createClient(newClient);

            res.sendStatus(201);
>>>>>>> origin/Carlos
        }
    }
}