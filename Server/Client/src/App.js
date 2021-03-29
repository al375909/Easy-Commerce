import './App.css';
import Comunicacion from './components/comunicacionPrueba';
import { useEffect } from 'react';
import TiendasProvider from './context/tiendas/Provider.js';


function App() {

  useEffect(() => {

    // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
    console.log(TiendasProvider)

    // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
  }, []);


  return (
    <TiendasProvider>
      <Comunicacion />
    </TiendasProvider>
    

  );
}

export default App;

