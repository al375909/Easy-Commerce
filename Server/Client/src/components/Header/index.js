import cesta from "./cesta.png"
import cart from "./cesta1.png"
import userpic from "./user.png"

import "./style.css"
import { Link } from "react-router-dom";
import SessionContext from "../../context/session";
import { useContext, useState } from "react";

export default function Header(props) {
    const { user, setUser, userProducts, setUserProducts, deleteProduct } = useContext(SessionContext);

    const [menuOpen, setMenutOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);

    const logout = () => {
        localStorage.clear();
        setUserProducts(new Map());
        setUser(null);
    }

    // const deleteProduct = async (productID) => {
    //     console.log("productID", productID)
    //     console.log("userProducts", userProducts);

    //     const newMap = new Map(userProducts);
    //     newMap.delete(productID)

    //     await setUserProducts(newMap);

    //     console.log("userProducts", userProducts);

    //     localStorage.setItem('productMap', JSON.stringify(Array.from(newMap)));

    // }


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
                                val.map((productInf) =>
                                    <div id={productInf.product.codprod} className="product">
                                        <div className="info">
                                            {/* {console.log("producto ", productInf.product.codprod, ":", productInf)} */}
                                            <img alt='' src={productInf.product.imagen} />
                                            <p className="name">{productInf.product.nombre}</p>
                                            <p className="amount">{productInf.amount}</p>
                                            <button type="button" class="close" aria-label="Close" onClick={() => { deleteProduct(key, productInf.product.codprod) }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                )
                            )

                        }</div>

                        <div className="checkout">
                            <Link to="/checkout">
                                <button className="btn btn-primary">Ir al carrito</button>
                            </Link>
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
                </div>
                    :
                    <div className="login">
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    </div>
                } </div>
        </nav>
    </>);

}
