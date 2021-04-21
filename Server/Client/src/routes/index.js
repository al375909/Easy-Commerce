import {BrowserRouter as Router, Route, Switch, useHistory} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup"

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>

                <Route path="/login" component={Login} exact>
                </Route>

                <Route path="/signup" component={Signup} exact>
                </Route>

            </Switch>
        </Router>
    );
}
