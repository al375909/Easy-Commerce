import axios from 'axios';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SessionContext from "./index";

export default function SessionProvider({children}) {

    const [user, setUser] = useState(localStorage.getItem('user') || "");
    const [isCommerce, setIsCommerce] = useState(false);


    // TODO el user se actualizara desde el login

    const login = () => { /*TODO comunicacion con el servidr com
            si estoy y la conraseña es correcta setUser 
                y setiscommerce
            sino sigo null
    */
    }


    return (
        <SessionContext.Provider value={
            {user, setUser}
        }>
            {children} </SessionContext.Provider>
    );


}
