import { useState, useContext, useRef } from "react";
import './style.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
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

export default function SignupForm({ goHome }) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [animate, setAnimate] = useState(false);

    const [samePassword,setSamePassword]=useState(true); 

    const [nif, setNif] = useState("");
    const [direction, setDirection] = useState("");

    const [cif, setCif] = useState("");
    const [commerceName, setCommerceName] = useState("");
    const [description, setDescription] = useState("");
    const [commerceType, setcommerceType] = useState("");



    const [isCommerce, setIsCommerce] = useState(false);

    const { user, setUser } = useContext(SessionContext);

    

  const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.red,
    },
    tooltip: {
      backgroundColor: theme.palette.common.red,
    },
  }));
  
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }




    const handleKeyDown = (e) => {
        if (e.key === " ") {
          e.preventDefault();
        }
      };

    const handleSubmit = async (event) => {

        event.preventDefault()


        if (isCommerce) {
            const userInfo = {
                firstName:firstName,
                lastName:lastName,
                username: userName,
                password: password,
                cif:cif,
                commerceName:commerceName,
                commerceType:commerceType,
                description:description,
            }
            console.log(userInfo)
        }else{
            const userInfo = {
                firstName:firstName,
                lastName:lastName,
                username: userName,
                password: password,
                nif:nif,
                direction: direction,
            
            }
            console.log(userInfo)
        }
    }
    const changeFalse = async (event) => {
        setAnimate(true)

        setIsCommerce(false)

    }
    const changeTrue = async (event) => {

        setAnimate(true)

        setIsCommerce(true)

    }





    return (
        <div className="container">
            <form className="registration-form-card">
                <h3>Información de Cuenta</h3>
                {/*Nombre y apellidos*/}
                <div className="full-name">
                    <div id="name-input" className="form-group">
                        <label>First Name</label>
                        <input
                            value={firstName}
                            onChange={
                                event => {
                                    setFirstName(event.target.value)
                                }
                            }
                            className="form-control"
                            placeholder="First Name" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input className="form-control"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={
                                event => {
                                    setLastName(event.target.value)
                                }
                            } />
                    </div>

                </div>
                <div className="form-group">
                    <label>Usuario</label>
                    <input className="form-control"
                        value={userName}
                        onKeyDown={handleKeyDown}
                        onChange={
                            event => {
                                setUserName(event.target.value)
                            }
                        }
                        placeholder="Username" />
                </div>

                {/*contraseña*/}
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" onKeyDown={handleKeyDown} className="form-control"
                        value={password}
                        onChange={
                           (event) => {
                                setPassword(event.target.value)
                                
                        
                            }
                        }
                        placeholder="Password" />
                </div>
            
                {/*contraseña*/}
                <div className="form-group">
                    <label>Comfirmar contraseña</label>
                   
                    <input type="password" className="form-control"
                        value={confirmationPassword}
                        onChange={
                            event => {
                                setConfirmationPassword(event.target.value)
                              
                            }
                        }
                        
                        placeholder="Password" />
                </div>
                {/**popup cuando la ocntraseña es diferente a su comfirmación  */}
                <BootstrapTooltip title="La contraseña no coincide" placement="bottom-start" open={ password!==confirmationPassword}>
                    <div className="popup"></div>
                </BootstrapTooltip>

                <h3>Tipo de usuario</h3>
                <div className="radio-group">
                    <input type="radio" value={true} name="gender" onClick={changeFalse} checked={!isCommerce} /> Cliente
                    <input type="radio" value={true} name="gender" onClick={changeTrue} /> Comercio

                </div>

                <div className={`${
                    animate ? "expanded" : ""
                    }`}
                    onAnimationEnd={() => { setAnimate(false) }}>
                    {!isCommerce ?
                        <div className={`client-info`}>
                            <h3>Información de Cliente</h3>
                            <div className="form-group">
                                <label> Nif</label>
                                <input
                                    value={nif}
                                    onChange={
                                        event => {
                                            setNif(event.target.value)
                                        }
                                    } className="form-control"
                                    placeholder="Nif" />
                            </div>
                            {/*Nombre de tienda*/}
                            <div className="form-group">
                                <label> Direcció</label>
                                <input
                                    value={direction}
                                    onChange={
                                        event => {
                                            setDirection(event.target.value)
                                        }
                                    } className="form-control"
                                    placeholder="Dirección" />
                            </div>
                        </div>
                        :
                        <div className={`market-info`}>
                            <h3>Información de Comercio</h3>
                            {/*Cif*/}
                            <div className="form-group">
                                <label> Cif</label>
                                <input
                                    value={cif}
                                    onChange={
                                        event => {
                                            setCif(event.target.value)
                                        }
                                    } className="form-control"
                                    placeholder="Cif" />
                            </div>
                            {/*Nombre de tienda*/}
                            <div className="form-group">
                                <label> Nombre del comercio</label>
                                <input
                                    value={commerceName}
                                    onChange={
                                        event => {
                                            setCommerceName(event.target.value)
                                        }
                                    }
                                    className="form-control"
                                    placeholder="Nombre del comercio" />
                            </div>
                            {/*Descripcion*/}
                            <div className="form-group">
                                <label> Descripcion</label>
                                <input
                                    value={description}
                                    onChange={
                                        event => {
                                            setDescription(event.target.value)
                                        }
                                    } className="form-control"
                                    placeholder="Ejemplo: Pescaderia para toda la familia y a los mejores precios" />
                            </div>
                            {/*Tipo de Comercio*/}
                            <div className="form-group">
                                <label> Tipo de comercio</label>
                                <input
                                    value={commerceType}
                                    onChange={
                                        event => {
                                            setcommerceType(event.target.value)
                                        }
                                    } className="form-control"
                                    placeholder="Pescaderia, carniceria, panaderia ... " />
                            </div>

                        </div>
                    }
                </div>




                <button type="submit" className="btn btn-primary"
                    onClick={handleSubmit}>Submit</button>

            </form>
        </div>
    );

}
