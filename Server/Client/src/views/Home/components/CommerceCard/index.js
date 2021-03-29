
import './style.css'

export default function CommerceCard({ name, img, description }) {


    return (
        <div className="card" >
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <div className="card-info">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <a href="#" className="btn btn-primary">Go to Commerce</a>
            </div>
        </div>
    );


}