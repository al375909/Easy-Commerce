import './App.css';
import {useEffect} from 'react';
import TiendasProvider from './context/tiendas/Provider.js';

import Routes from './routes';
import SessionContext from './context/session';
import SessionProvider from './context/session/Provider';


function App() {

    useEffect(() => {

        // Usa la función gteDato donde se setea la varibale datos al renderizar el componente


        // es necesario injectar dependencias en useEffect para que pueda usar le metodo del hook que usamos
    }, []);


    return (
        <SessionProvider>
            <TiendasProvider>
                <Routes/>
            </TiendasProvider>
        </SessionProvider>

    );
}

export default App;
