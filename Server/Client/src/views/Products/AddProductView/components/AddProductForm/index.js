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

      const getFilesFromEvent = e => {
        return new Promise(resolve => {
          getDroppedOrSelectedFiles(e).then(chosenFiles => {
            resolve(chosenFiles.map(f => f.fileObject))
            setFile(chosenFiles[0]);
            console.log(file)
            
          })
        })
      }


    return(

        <>
        <div className="card ">
            <div className="card-body">
                
                
                <div className="form-content my-2">
                <br/>
                <h2 className="card-title">Añadir un nuevo producto</h2>
                <br/>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputNomProd" className="form-label">Nombre del producto</label>
                        <input type="text" className="form-control" id="inputNomProd" placeholder="Por ejemplo: Lata de Sardinas" maxLength="50" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputDescripcionProd" className="form-label">Descripción del producto</label>
                        <textarea className="form-control" id="inputDescripcionProd" placeholder="Lata de sardina de alta calidad pescadas en el Mar Mediterráneo
Peso escurrido: 250gr" maxLength="500" required></textarea>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPrecio" className="form-label">Precio</label>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" id="inputPrecio" min="0" step="0.01" placeholder="Indique el precio por unidad" required/>
                                <span className="input-group-text">€</span>
                            </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputDescuento" className="form-label">Descuento</label>
                            <div className="input-group mb-3">
                                <input type="number" className="form-control" id="inputDescuento" min="0" max="100" placeholder="Indique el descuento del producto" required/>
                                <span className="input-group-text">%</span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputInvent" className="form-label">Inventario</label>
                        <input type="number" className="form-control" id="inputInvent" placeholder="Indique el número de unidades" min="0" required/>
                    </div>
                    <div>
                        <div className="form-group dropbox">
                            <label htmlFor="inputInvent" className="form-label">Imagen del producto</label>
                            
                            <Dropzone
                            maxFiles={1}
                            getFilesFromEvent={getFilesFromEvent}
                            inputContent={'Arrastre la imagen o haga click para explorar'}
                            styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
                            />
                        </div>
                        
                        
                        <div className="col">
                            <button type="button" className="btn btn-danger float-left">Cancelar</button>                        
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-success float-right">Subir artículo</button>
                        </div>
                        
                    </div>
                </form>
                </div>
            </div>
        </div>
        </>
       
    );
}