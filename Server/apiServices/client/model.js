const clientDao = require('./dao');

module.exports = {
    async listOrder(usernameClient) {
        clientDao.getOrderList();
    },

    async getOrder(orderId){

    },

    async addOrder(client, commerce, paymentMethod, items){
        // debemos de comprobar el metodo de pago,
        // debemos de comprobar si existen los items,
        // debemos de comprobar el cliente y el comercio
        if(paymentMethod === "efectivo" | "tarjeta"){
            console.log("Efectivo o tarjeta");
            /*
            for(let item in items){
                const existeItem = await clientDao.getItem(item.codprod, commerce);
                if(existeItem.length == 0){ // si no existe el item
                    return false;
                }
            }*/
            // Después de las comprobaciones añadimos el pedido
            console.log("Commerce addOrder: ", commerce);
            const codped = await clientDao.addOrder(paymentMethod, client, commerce);
            console.log("CODPED: ", codped);
            return;
            await clientDao.addItems(items);
            return true;
        }
    }
}