import CommerceCard from "../CommerceCard";
import "./style.css"
export default function Commerces({ datos }) { // return
    return (<div className="m-4 space-top">

        <div className="card-container"> {
            datos.map((item) =>
                <CommerceCard key={item.id}
                    {...item}>
                </CommerceCard>)
        } </div>

    </div>);

}
