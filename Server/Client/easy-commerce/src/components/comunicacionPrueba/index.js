import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Comunicacion(){

    const [datos,setDatos] = useState([]);
    
    const getDato =  async () =>{
        //recoje la respuesta de la llamada tipo get a la api 
        const data= await (await axios.get(`https://jsonplaceholder.typicode.com/users`))

        //asignamos a nuestra variable de entorno por el hook la informacion recogida por la llamada a la api
        await setDatos(data.data)
    }
    useEffect(() => {

        // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
        getDato()

      // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
      },[setDatos]);
    return (

        //por cada elemento de datos se crea un div asignandole como key la id del elemento del array como buena practica
        //y por cada div se muestra el nombre de la persona de la array
        
        <div>
           {datos.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
          </div>
        ))}
        </div>
    );


}