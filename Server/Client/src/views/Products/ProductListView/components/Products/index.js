import ProductCard from "../ProductCard";


export default function Products({ products }) {
    return (
        <div className="space">
            <div className="card-container">

                {
                    products.map((item) =>
                        < ProductCard key={item.id} {...item} />)
                }
            </div>
        </div>
    );


}