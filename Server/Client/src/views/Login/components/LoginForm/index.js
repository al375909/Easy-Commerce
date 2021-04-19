import { useState, useContext } from "react";
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

    const {user,setUser} = useContext(SessionContext);


    const handleSubmit = async (event) =>{
        setUser(userName)
          
        event.preventDefault()

        await sessionStorage.setItem('user',user)
       // console.log(localStorage.getItem('user'))
        setPassword("")
        goHome()
        
        
        
    }


    return (
       
        <div className="container">
            <form>
                <div className="form-group">
                    <label >Username</label>
                    <input className="form-control" value={userName} onChange={event=>{setUserName(event.target.value)}}  placeholder="Username" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" value={password} onChange={event=>{setPassword(event.target.value)}} placeholder="Password" />
                </div>
                <Link to="/">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Link>
                <Link to="/">Mover</Link>
            </form>
        </div>
       
    );

}


