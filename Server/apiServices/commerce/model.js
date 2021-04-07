const commerceDao = require('./dao');

module.exports = {
  async listCommerce(){
    return commerceDao.listCommerce();
  },
  // Recibe un objeto JS de comercio
  async createCommerce (commerce) {
    return commerceDao.createCommerce(commerce);
  }
};