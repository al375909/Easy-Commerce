import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Singup from "../views/Singup"

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/login" component={Login} exact>
                </Route>

                <Route path="/singup" component={Singup} exact>
                </Route>

            </Switch>
        </Router>
    );
}
