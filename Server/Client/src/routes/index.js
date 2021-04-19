import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";


export default function Routes(){

    

return(

    <Router >
        <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/login" component={Login} exact >
            {/** <Login />*/}
        </Route>
        </Switch>
    </Router>


);

} 