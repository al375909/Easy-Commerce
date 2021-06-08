const commerceDao = require('./dao');

module.exports = {
  async listCommerce(){
    return await commerceDao.listCommerce();
  },



  // Recibe un objeto JS de comercio
  async createCommerce (commerce) {
    return commerceDao.createCommerce(commerce);
  }, 

  async updateProduct(product){
    console.log(product);
    return commerceDao.updateProduct(product);
  },

  async getProducts(commerceName){
    return commerceDao.getProducts(commerceName);
  },



  async getCommerce(commerceName){
    const res = commerceDao.getCommerce(commerceName);
    if(res > 0){
      return res;
    }
  },

  async loginCommerce(username, password){
    const res = commerceDao.loginCommerce(username, password);
  },

  async addProduct(commerceName, product){
    const commerce = await commerceDao.getCommerce(commerceName);
    if (commerce.length>0){ // si existe el comercio al que asignar el producto
      product = await commerceDao.addProductToCatalog(commerceName, product);
    }
  },

  async deleteProduct(commerceName, codProd){
    const commerce = await commerceDao.getCommerce(commerceName);
    if (commerce.length>0){ // si existe el comercio al que asignar el producto
      product = await commerceDao.deleteProductToCatalog(commerceName, codProd);
    }
  }
};