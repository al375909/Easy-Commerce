import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TiendasContext from "./index";

export default function TiendasProvider({children}) {

  const [datos, setDatos] = useState([]);

  const getDato = async () => {
    //recoje la respuesta de la llamada tipo get a la api 
    const data = await (await axios.get(`http://localhost:5000/`))

    //asignamos a nuestra variable de entorno por el hook la informacion recogida por la llamada a la api
    await setDatos(data.data)
  }

  return (

    //por cada elemento de datos se crea un div asignandole como key la id del elemento del array como buena practica
    //y por cada div se muestra el nombre de la persona de la array


    <TiendasContext.Provider value={{getDato,datos}}>
        {children}
    </TiendasContext.Provider>
  );


}