
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from "react";
import SessionProvider from './Provider';


 const SessionContext = createContext("session");
export default SessionProvider;