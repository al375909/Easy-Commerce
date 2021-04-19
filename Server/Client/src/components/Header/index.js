import cesta from "./cesta.png"
import cart from "./cesta1.png"
import userpic from "./user.png"

import "./style.css"
import { Link } from "react-router-dom";
import SessionContext from "../../context/session";
import { useContext } from "react";
export default function Header(props) {

    const { user, setUser } = useContext(SessionContext);



    const logout = () =>{

        setUser("");
        


    }


    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* Burger menu */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <div className="navbar-brand">
                <a href="/">
                    <img alt='' src={cesta} />
                </a>
            </div>

            {/* Full width menu */}
            <div className="navbar-links collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mis pedidos</a>
                    </li>
                </ul>
            </div>

            {/* Cart + User Pic */}
            <div className="navbar-user">
                <div className="cart-box">
                    <div className="cart">
                        <img src={cart} />
                    </div>

                    <div className="cart-products">
                        <p>4</p>
                    </div>
                </div>

                
                    {user != "" ?
                        <div className="user-box">
                            <div className="user-pic">
                                <img alt='' className="profile-pic" src={userpic} />
                            </div>
                            <div className="logout">
                                <Link to="/">
                                <button onClick={logout} >Logout</button>
                                </Link>
                            </div>
                        </div>
                        :
                        <div className="login">
                            <Link to="/login">
                                <p>Login</p>
                            </Link>
                        </div>
                    }
                
            </div>
        </nav>

    );

}