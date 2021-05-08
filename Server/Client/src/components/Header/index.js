import cesta from "./cesta.png"
import cart from "./cesta1.png"
import userpic from "./user.png"

import "./style.css"
import { Link } from "react-router-dom";
import SessionContext from "../../context/session";
import { useContext, useState } from "react";

export default function Header(props) {
    const { user, setUser, userProducts } = useContext(SessionContext);

    const [menuOpen, setMenutOpen] = useState(false);

    const [productsOpen, setProductsOpen] = useState(false);

    const logout = () => {
        setUser("");
    }


    return (<>
        <div className={
            `left-menu ${menuOpen ? "open" : "closed"
            }`
        }>
            <button type="button"
                onClick={
                    () => {
                        setMenutOpen(!menuOpen)
                    }
                }>close</button>
            <div className="links">
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-header"> {/* Burger menu */}
            <button className="burger-menu"
                onClick={
                    () => {
                        setMenutOpen(!menuOpen)
                    }
                }
                type="button">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Logo */}
            <div className="navbar-brand">
                <a href="/">
                    <img alt=''
                        src={cesta} />
                </a>
            </div>

            {/* Full width menu */}
            <div className="navbar-links collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Mis pedidos</a>
                    </li>
                </ul>
            </div>

            {/* Cart + User Pic */}
            <div className="navbar-user">
                {user ? <div className="user-box">

                    <div className="cart-box"
                        onClick={() => {
                            setProductsOpen(!productsOpen)
                        }}>
                        <div className="cart">
                            <img src={cart} />
                        </div>

                        <div className="cart-products">
                            <p>{userProducts.size}</p>
                        </div>

                    </div>
                    <div className={`cart-preview ${productsOpen ? "active" : ""}`}>
                        <div className="products"> {
                            Array.from(userProducts).map(([key, val]) =>
                                <div id={key} className="product">
                                    <div className="info">
                                        {console.log(val)}
                                        <img alt='' src={val.productImg} />
                                        <p className="name">{val.productName}</p>
                                        <p className="amount">{val.amount}</p>
                                    </div>
                                </div>
                            )
                        }</div>

                        <div className="checkout">
                            <button className="btn btn-primary">Ir al carrito</button>
                        </div>
                    </div>

                    <div className="user-pic">
                        <img alt='' className="profile-pic"
                            src={userpic} />
                    </div>
                    <div className="logout">
                        <Link to="/">
                            <button onClick={logout}>Logout</button>
                        </Link>
                    </div>



                </div> : <div className="login">
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                } </div>
        </nav>
    </>);

}
