import React, { useState } from 'react';
import axios from 'axios';
import './style.css'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'

export default function AddProductForm(){
    
    const [file, setFile] = useState('');

    const date = new Date();

      const handleSubmit = async (files, allFiles) => {
        console.log("He llegado hasta aquí 1");
        console.log(allFiles)
        const f = new FormData();
        f.append("key", "893b927042e526398eb2aff94c2eeeb9");
        f.append("image", allFiles[0].file);
        f.append("name", date.toISOString());

        await axios.post("https://api.imgbb.com/1/upload", f)
            .then(resp => {
                console.log(resp.data.data) // I'm aware it's data.data, that is how it returns stuff
        })

      }

      const handleFormSubmit  = async (files, allFiles) => {
        let myForm = document.getElementById('addProductForm');
        let formData = new FormData(myForm);    
        console.log("FORM", formData);
        console.log("Nom poroduct", formData.get("inputNomProd"));
        console.log("He llegado hasta aquí 2");
        await axios.post("/api/tiendas/products", {
            nombre: formData.get("nombre"),
        descripcion:  formData.get("descripcion"),
        precio:  formData.get("precio"),
        descuento:  formData.get("descuento"),
        cantidad:  formData.get("cantidad"),
        imagen:  "patata" })
        .then(res => {
        console.log("HOALAA",res);
        console.log("KOAALA",res.data);
        })
    }

      const getFilesFromEvent = e => {
        return new Promise(resolve => {
          getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
            setFile(chosenFiles[0]);
            console.log("chosenFiles[0]")
            
          })
        })
      }


    return(

        <>
        <div class="card ">
            <div class="card-body">
                
                
                <div class="form-content my-2">
                <br/>
                <h2 class="card-title">Añadir un nuevo producto</h2>
                <br/>
                <form onSubmit={handleFormSubmit} name="addProductForm" id="addProductForm">
                    <div class="form-group">
                        <label for="inputNomProd" class="form-label">Nombre del producto</label>
                        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Por ejemplo: Lata de Sardinas" maxlength="50" required/>
                    </div>
                    <div class="form-group">
                        <label for="inputDescripcionProd" class="form-label">Descripción del producto</label>
                        <textarea class="form-control" name="descripcion" id="descripcion" placeholder="Lata de sardina de alta calidad pescadas en el Mar Mediterráneo
                            Peso escurrido: 250gr" maxlength="500" required></textarea>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputPrecio" class="form-label">Precio</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control"  name="precio" id="precio" min="0" step="0.01" placeholder="Indique el precio por unidad" required/>
                                <span class="input-group-text">€</span>
                            </div>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputDescuento" class="form-label">Descuento</label>
                            <div class="input-group mb-3">
                                <input type="number" class="form-control" name="descuento" id="descuento" min="0" max="100" placeholder="Indique el descuento del producto" required/>
                                <span class="input-group-text">%</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="inputInvent" class="form-label">Inventario</label>
                        <input type="number" class="form-control" name="cantidad" id="cantidad" placeholder="Indique el número de unidades" min="0" required/>
                    </div>
                    <div class="form-group dropbox">
                        <label for="inputInvent" class="form-label">Imagen del producto</label>
                        
                        <Dropzone
                        maxFiles={1}
                        getFilesFromEvent={getFilesFromEvent}
                        inputContent={'Arrastre la imagen o haga click para explorar'}
                        styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                        />
                    </div>
           



                    <div class="form row">
                        <div class="col-6">
                            <button type="button" class="btn btn-danger float-left">Cancelar</button>
                        </div>
                        
                        <div class="col-6">
                            <button type="submit" class="btn btn-success float-right">Subir artículo</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
       
    );
}