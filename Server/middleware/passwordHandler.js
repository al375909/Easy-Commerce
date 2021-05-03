const bscrypt = require('bcryptjs');


module.exports = {
    encryptPassword: async (password) => {
        const salt = await bscrypt.getSalt(10);
        const hash = await bscrypt.hash(password, salt);
        return hash;
    },
    matchPassword: async(password, savedPassword) => {
        try{
            await bscrypt.compare(password, savedPassword);
        }catch(err){
            console.log(err);
        }
    }

}