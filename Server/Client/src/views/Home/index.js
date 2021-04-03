import TiendasContext from "../../context/tiendas"
import React, { useEffect, useContext } from 'react';
import CommerceCard from "./components/CommerceCard"
import Commerces from "./components/Commerces";
import Header from "../../components/Header";
export default function Home(){

    const { getDato, datos } = useContext(TiendasContext);


    useEffect(() => {
  
      // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
      getDato()
  
      // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
    }, []);

    return(
        <div>
        <Header />
        <Commerces datos={datos}/>
        </div>
    );
}