import './style.css'
import { Link } from 'react-router-dom';

export default function CommerceCard({username,nombretienda, imagen}) {


    return (
        <div className="commerce-card">
            <img className="card-img-top"
                src={imagen}
                alt="Card image cap"/>
            <div className="card-body">
                <div className="card-info">
                    <h5 className="card-title">
                        {nombretienda}</h5>
                    <p className="card-text">Molaria que las tiendas tubieran una descripcion</p>
                </div>
                <Link to={`${username}/products`}>
                    <a href="#" className="btn btn-primary">Go to Commerce</a>
                </Link>
            </div>
        </div>
    );


}
