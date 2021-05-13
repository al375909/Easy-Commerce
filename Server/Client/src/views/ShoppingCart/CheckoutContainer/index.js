import { useContext } from "react";
import SessionContext from "../../../context/session";
import { useEffect } from "react";

export default function CheckoutContainer(){

    const {userProducts} = useContext(SessionContext);


    const buildShopsFromMap = () =>{
         let newMap = new Map();
         console.log("perrrrrrp");
         Array.from(userProducts).map(([key,val])=>{
            let productList=newMap.get(val.nombreTienda)
            if(productList){
                productList.push(val)
            }else{
                newMap.set(val.nombreTienda,[val]);
            }
                      

         })
         console.log(newMap);
    } 

    useEffect(()=>{
        buildShopsFromMap();
    },[])

    return(
        <div className="checkout-container">
            
        </div>
    );
}