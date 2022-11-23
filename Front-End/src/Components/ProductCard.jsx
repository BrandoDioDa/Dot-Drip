import { Card, CardGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../view/cssDesign/ProductCard.css"

const ProductCard = ({ obj }) => {

    return (
        <Card className="ProductCard" style={{ width: '16rem', height: '16rem'}}>
            <img src={obj.image}/>
            <Card.Body>
                <Card.Title>{obj.title}</Card.Title>
                <Card.Text>{obj.vendor}</Card.Text>
                <Button variant="btn btn-outline-dark" className="m-2">To Cart</Button>
                <Link className="btn btn-outline-dark" to={`/Products/${obj._id}`}>More...</Link>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;