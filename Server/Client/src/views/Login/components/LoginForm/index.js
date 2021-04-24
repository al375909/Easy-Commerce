import {useState, useContext} from "react";
import './style.css'
import SessionContext from "../../../../context/session";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export default function LoginForm({goHome}) {


    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useContext(SessionContext);


    const handleSubmit = async (event) => {

        event.preventDefault()

        setUser(userName)
        // La contraseña mejor no dejarla por ahi la borramos de local mejor
        setPassword("")

        // actualizamos el storage para persistencia ante refresh de la pagina
        localStorage.clear()
        await localStorage.setItem('user', user)
        goHome()


    }


    return (

        <div className="container">
            <form>
                <div className="form-group">
                    <label>Usuario</label>
                    <input className="form-control"
                        value={userName}
                        onChange={
                            event => {
                                setUserName(event.target.value)
                            }
                        }
                        placeholder="Username"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control"
                        value={password}
                        onChange={
                            event => {
                                setPassword(event.target.value)
                            }
                        }
                        placeholder="Password"/>
                </div>

            <p className="singup">Registrate
                <Link to="/signup">aquí</Link>
            </p>
            <button type="submit" className="btn btn-primary"
                onClick={handleSubmit}>Submit</button>

        </form>
    </div>

    );

}
