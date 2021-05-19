import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionContext from "./index";

export default function SessionProvider({children}) {

    const [user, setUser] = useState( JSON.parse( localStorage.getItem('user')) || null);
    const [isCommerce, setIsCommerce] = useState(false);

    // TODO el user se actualizara desde el login

    const login = async (userObject) => { 
        
        console.log("entra en axios login")
        const data = await axios.get(`/api/login`,{ params: { username:userObject.username,passwd:userObject.password }});
        console.log(data.data)
        if (data.status!=401){
            setUser(data.data);
            await localStorage.setItem('user', JSON.stringify(data.data));
        }

    }

    return (
        <SessionContext.Provider value={
            {user, setUser,login}
        }>
            {children} </SessionContext.Provider>
    );

}
