import CommerceCard from "../CommerceCard";
import "./style.css"
export default function Commerces({ datos }) {

    return (

        <div className="m-4">

            <div className="card-container">
                {datos.map((item) =>

                    <CommerceCard key={item.id} {...item}>

                    </CommerceCard>
                )}

            </div>

        </div>
    );

}