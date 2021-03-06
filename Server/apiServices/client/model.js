const clientDao = require('./dao');

module.exports = {
    async listOrder(usernameClient, type) {
        const list = await clientDao.getOrderList(usernameClient, type);
        return list;
    },

    async getOrder(orderId) {

    },

    async addOrder(client, commerce, paymentMethod, items) {
        // debemos de comprobar el metodo de pago,
        // debemos de comprobar si existen los items,
        // debemos de comprobar el cliente y el comercio
        if (paymentMethod === "efectivo" || paymentMethod === "tarjeta") {
            /*
            for(let item in items){
                const existeItem = await clientDao.getItem(item.codprod, commerce);
                if(existeItem.length == 0){ // si no existe el item
                    return false;
                }
            }*/
            // Después de las comprobaciones añadimos el pedido
            console.log("Modelo antes")
            const codped = await clientDao.addOrder(paymentMethod, client, commerce);
            console.log("Modelo despues", codped);

            if (codped >= 0) {
                if (!await clientDao.addItems(items, codped)) {
                    await clientDao.deleteOrder(codped);
                    return false;
                }
                return true;
            }
            return false;
        }
    }
}