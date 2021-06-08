import ProductCard from "../ProductCard";


export default function Products({ products ,tienda, userTienda}) {
    return (
        <div>
            < div className="card-container" >

                {
                    products.map((item) =>
                        < ProductCard key={item.id} product={item} tienda={tienda} userTienda={userTienda} />)
                }
            </div >
        </div >
    );


}