const commerceModel = require("./model");
const bscrypt = require('bcryptjs');
const passport = require("passport");

module.exports = {
  getCommerce: async function(req, res) {
    console.log("Listando comercios");
    const q = await commerceModel.listCommerce();
    console.log(q);
    res.send(q);
  },
  createCommerce: passport.authenticate('local.signup', {
    successRedirect: res.sendStatus(201),
    failureRedirect: res.sendStatus(500),
  }),
};
