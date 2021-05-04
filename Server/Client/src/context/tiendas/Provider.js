import axios from 'axios';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TiendasContext from "./index";

export default function TiendasProvider({ children }) {

    const [datos, setDatos] = useState([]);

    const getDato = async () => {
        //recoje la respuesta de la llamada tipo get a la api 
        // heroku url = https://easy-commerce-ei1050.herokuapp.com/
        // local url = http:://localhost:3000/
        const data = await (await axios.get(`/api/tiendas`))
        //const data = await (await axios.get("https://easy-commerce-ei1050.herokuapp.com/tiendas"))
        console.log("petición hecha")
       // console.log(data.data);

        // asignamos a nuestra variable de entorno por el hook la informacion recogida por la llamada a la api
        await setDatos(data.data)
        
    }





    // por cada elemento de datos se crea un div asignandole como key la id del elemento del array como buena practica
    // y por cada div se muestra el nombre de la persona de la array
    return (
        <TiendasContext.Provider value={
            {
                getDato,
                datos
            }
        }>
            {children} </TiendasContext.Provider>
    );


}
