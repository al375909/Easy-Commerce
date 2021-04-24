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

export default function SignupForm({goHome}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {user, setUser} = useContext(SessionContext);

    const handleSubmit = async (event) => {
        event.preventDefault()

        setUser(userName)
        // La contraseña mejor no dejarla por ahi la borramos de local mejor
        setPassword("")

        // actualizamos el storage para persistencia ante refresh de la pagin
        localStorage.clear()
        await localStorage.setItem('user', user)
        goHome()
    }


    return (
        <div className="container">
            <p>HOLAA</p>
        </div>
    );

}
