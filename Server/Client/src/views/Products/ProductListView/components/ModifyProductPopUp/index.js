import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import "./style.css";
import ModifyProductForm from '../../../AddProductView/components/ModifyProductForm';
 
export default function ModifyProductPopUp ({product}){
    return(
      <Popup trigger={<button className="btn btn btn-warning modify-product-btn"> Modificar </button>} modal>
          <ModifyProductForm product={product}/>
      </Popup>
    );
}