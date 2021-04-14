const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, async (req, username, password, done) => {

    const passwordHash = await bscrypt.hash(req.body.password, 10);
    const newCommerce = {
        cif: req.body.cif,
        username: req.body.username,
        password: passwordHash,
        email: req.body.email,
        nombre: req.body.nombre,
        altitud: req.body.altitud,
        latitud: req.body.latitud,
    };

    
}));
// LA POLLA
passport.serializeUser((user, done) => {

});