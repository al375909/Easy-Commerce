import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views/Home";


export default function Routes(){

return(

    <Router>
        <Route path="/" >
            <Home />
        </Route>

    </Router>

);

} 