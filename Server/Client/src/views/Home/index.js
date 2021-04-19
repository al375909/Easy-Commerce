import TiendasContext from "../../context/tiendas"
import React, { useEffect, useContext } from 'react';

import Commerces from "./components/Commerces";
import Header from "../../components/Header";
import SessionContext from "../../context/session";
export default function Home(){

    const { getDato, datos } = useContext(TiendasContext);
    const {user,setUser} = useContext(SessionContext);


    useEffect(() => {
      console.log(user)
      sessionStorage.setItem('user',user)
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