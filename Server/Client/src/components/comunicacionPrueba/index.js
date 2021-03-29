
import React, { useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TiendasContext from "../../context/tiendas"
import CommerceCard from './CommerceCard';
import "./style.css"
export default function Comunicacion() {


  const { getDato, datos } = useContext(TiendasContext);


  useEffect(() => {

    // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
    getDato()

    // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
  }, []);
  return (

    //por cada elemento de datos se crea un div asignandole como key la id del elemento del array como buena practica
    //y por cada div se muestra el nombre de la persona de la array

    //    {datos.map((item) =>
    //   <div>
    //  {item.id}
    // </div>


    <div className="m-4">
     
      <div className="card-container">
      {datos.map((item) =>
        
        <CommerceCard key={item.id} {...item}>

        </CommerceCard>
      )}

      </div>

    </div>
  );


}