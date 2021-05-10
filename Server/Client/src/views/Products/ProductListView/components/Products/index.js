import ProductCard from "../ProductCard";


export default function Products({ products }) {
    return (
        <div>
            < div className="card-container" >

                {
                    products.map((item) =>
                        < ProductCard key={item.id} {...item} />)
                }
            </div >
        </div >
    );


}