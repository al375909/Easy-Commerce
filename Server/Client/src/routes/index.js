import {BrowserRouter as Router, Route, Switch,useLocation, useHistory} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup"
import ProductList from "../views/Products/ProductListView";

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

                
                <Route path="/:id/products"  render={({ match }) => <ProductList match={match} />} >
                    
                   
                </Route>

            </Switch>
        </Router>
    );
}
