const signupDao = require('./dao');
const passwordHandler = require('../../middleware/passwordHandler');


module.exports = {
    async signupCommerce(req, res){
        const commerce = signupDao.getCommerceUser(req.body.username);
        if(commerce.lenght > 0){ // Si existe algún usuario con ese nombre, no debemos dejar que se cree.
            res.send(400);
        }else{

        }
    },
    async signupClient(req, res){
        const client = signupDao.getClientUser(req.body.username);
        if(client.lenght > 0){
            res.send(400);
        }else{
            
        }
    }
}