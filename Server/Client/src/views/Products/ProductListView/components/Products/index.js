import ProductCard from "../ProductCard";


export default function Products({ products ,tienda}) {
    return (
        <div>
            < div className="card-container" >

                {
                    products.map((item) =>
                        < ProductCard key={item.id} product={item} tienda={tienda} />)
                }
            </div >
        </div >
    );


}