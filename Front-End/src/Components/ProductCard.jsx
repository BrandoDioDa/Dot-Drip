import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../view/cssDesign/ProductCard.css"

const ProductCard = ({ obj }) => {
    return (
        <Card className="ProductCard" style={{ width: '20rem'}}>
            <img src={obj.prodImage}/>
            <Card.Body>
                <Card.Title>{obj.prodName}</Card.Title>
                <Card.Text>In Stock : {obj.prodQuan}</Card.Text>
                <Button className="m-2 btn-success">To Cart</Button>
                <Link className="btn btn-outline-dark" to={`/Products/${obj._id}`}>More...</Link>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;