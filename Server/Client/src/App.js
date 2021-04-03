import './App.css';
import { useEffect } from 'react';
import TiendasProvider from './context/tiendas/Provider.js';
import Home from './views/Home';


function App() {

  useEffect(() => {

    // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
  

    // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
  }, []);


  return (
    <TiendasProvider>
      <Home />
    </TiendasProvider>
    

  );
}

export default App;

