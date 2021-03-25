import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Comunicacion(){

    const [datos,setDatos] = useState({
      anObject:{},
      anArray:[],
      another:""
    });
    
    const getDato =  async () =>{
        //recoje la respuesta de la llamada tipo get a la api 
        const data= await (await axios.get(`http://localhost:5000/`))

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


        <div className="m-4">
          <h3>From the Array </h3>
          {datos.anArray.map((item)=>
            <div>
              item
            </div>
          
          )}
<div className="m-4"/>
          <h3>Another object is = {datos.another}</h3>
            <div className="m-4"/>

          <h3>The object has te values</h3>
          <h2>{datos.anObject.item1}</h2>
       
          <h2>{datos.anObject.item2}</h2>
       
        </div>
    );


}