import CommerceCard from "../CommerceCard";
import "./style.css"
export default function Commerces({ datos }) { // return
    return (<div className="space-top space">

        <div className="card-container"> {
            datos.map((item) =>
                <CommerceCard key={item.id}
                    {...item}>
                </CommerceCard>)
        } </div>

    </div>);

}
