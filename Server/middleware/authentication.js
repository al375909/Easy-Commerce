const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('../apiServices/commerce/model');
const passwordHandler = require('../middleware/passwordHandler');



/**
 * 
 */
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, done) => {
    const passwordHash = await passwordHandler.encryptPassword(password);
    const newCommerce = {
        cif: req.body.cif,
        username: username,
        password: passwordHash,
        email: req.body.email,
        nombre: req.body.nombre,
        altitud: req.body.altitud,
        latitud: req.body.latitud,
    };

    model.createCommerce(newCommerce);
    return done(null, newCommerce);
}));

passport.use('local.signin', new LocalStrategy({
    usernameField:'username',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, done) => {
    const commerce = model.getCommerce(username)[0];
    const validPassword = await passwordHandler.matchPassword(password, commerce.password);
    if(validPassword){
        console.log("Contraseña válida"); 
        // null como error, ya que ha sido correcto. El comercio porque es el resultado que he
        // obtenido para serializar y deserializar
        done(null, commerce);
    }else{
        done(null, false)
    }

}));

/*passport.serializeUser((user, done) => {
    
});*/