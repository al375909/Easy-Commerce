const bscrypt = require('bcryptjs');


module.exports = {
    encryptPassword: async (password) => {
        const salt = await bscrypt.getSalt(10);
        const hash = await bscrypt.hash(password, salt);
        return hash;
    },
    matchPassword: async(password, savedPassword) => {
        try{
            const result = await bscrypt.compare(password, savedPassword);
            return result;
        }catch(err){
            console.log(err);
        }
    }

}