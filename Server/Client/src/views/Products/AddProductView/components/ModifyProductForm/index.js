import React, { useState, useContext } from 'react';
import axios from 'axios';
import './style.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import SessionContext from "../../../../../context/session";
import { Link } from "react-router-dom";

export default function ModifyProductForm({product}){
    
    const [file, setFile] = useState('');
    const {user, setUser} = useContext(SessionContext);

    const date = new Date();
    var imagen;
    var archivo;

      const uploadImage = async (file) => {
        const f = new FormData();
        f.append("key", "98dbdb8971adce611fe10bc7f5bb7b97");
        f.append("image", file.fileObject);
        await axios.post("https://api.imgbb.com/1/upload", f)
            .then(resp => {
                console.log(resp.data.data);
                imagen = resp.data.data; // I'm aware it's data.data, that is how it returns stuff
                setFile(imagen.url);
        })
      }

    const handleFormSubmit  = async (event) => {
        let myForm = document.getElementById('updateProductForm');
        let formData = new FormData(myForm);    
        console.log("FORM", formData);
        console.log("Nom product", formData.get("inputNomProd"));
        console.log("Imagen", imagen);
        console.log("archivo", archivo);
        await axios.post("/api/tiendas/updateProduct", {
            codprod:product.codprod,
            nombre: formData.get("nombre"),
            descripcion:  formData.get("descripcion"),
            precio:  formData.get("precio"),
            descuento:  formData.get("descuento"),
            cantidad:  formData.get("cantidad"),
            //imagen: file,
        })
        .then(res => {
            console.log("Producto enviado al back-end");
        })
        event.preventDefault();
    }

      const getFilesFromEvent = async (e) => {
        return new Promise(resolve => {
          getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
            setFile(chosenFiles[0]);
            uploadImage(chosenFiles[0]);
          })
        })
      }

    
    return(

        <>
        <div class="card ">
            <div class="card-body">   
                <div class="form-content my-2">
                <br/>
                <h2 className="card-title">Modificar producto</h2>
                <br/>
                <form /*onSubmit={handleFormSubmit}*/ name="updateProductForm" id="updateProductForm">
                    <div class="form-group">
                        <label for="inputNomProd" class="form-label">Nombre del producto</label>
                        <input type="text" class="form-control" defaultValue={product.nombre} name="nombre" id="nombre"  maxlength="50" required/>
                    </div>
                    <div class="form-group">
                        <label for="inputDescripcionProd" class="form-label">Descripción del producto</label>
                        <textarea class="form-control" defaultValue={product.descripcion} name="descripcion" id="descripcion"  maxlength="500" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPrecio" class="form-label">Precio</label>
                            <div class="input-group mb-3">
                                <input type="number" defaultValue={product.precio} class="form-control"  name="precio" id="precio" min="0" step="0.01"  required/>
                                <span class="input-group-text">€</span>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputDescuento" class="form-label">Descuento</label>
                            <div class="input-group mb-3">
                                <input type="number" defaultValue={product.descuento*100} class="form-control" name="descuento" id="descuento" min="0" max="100"  required/>
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputInvent" class="form-label">Inventario</label>
                        <input type="number" defaultValue={product.cantidad} class="form-control" name="cantidad" id="cantidad"  min="0" required/>
                    </div>
                    <div>
                        
                        <div class="col-6">
                        <Link to="/">
                        <button type="button" onClick={handleFormSubmit} class="btn btn-success float-right">Modificar artículo</button>
                        </Link>
                        </div>
                        
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
       
    );
}