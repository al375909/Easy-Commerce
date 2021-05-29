import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddProductForm from '../../../AddProductView/components/AddProductForm';
 
export default function AddProductPopUp (){
    return(
      <Popup trigger={<button className="btn btn-primary new-product-btn"> <FontAwesomeIcon icon={faPlus} /> </button>} modal>
          <AddProductForm/>
      </Popup>
    );
}