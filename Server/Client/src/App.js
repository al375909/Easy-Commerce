import './App.css';
import { useEffect } from 'react';
import TiendasProvider from './context/tiendas/Provider.js';
import Home from './views/Home';
import Routes from './routes';


function App() {

  useEffect(() => {

    // Usa la función gteDato donde se setea la varibale datos al renderizar el componente
  

    // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
  }, []);


  return (
    <TiendasProvider>
      <Routes />
    </TiendasProvider>
    

  );
}

export default App;

