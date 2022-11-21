import React from 'react';
import notFound from "../view/images/notfound.jpg";


const ProductCard = (props) => {

    return (
        <div>
            <div className='ProductCard'>
                <b>{ props.product.prodName }</b>
                    <br></br>
                    <img 
                        src={props.product.prodImage} 
                        alt={props.product.prodName} 
                        class="productImage"
                        onError={(e) => { e.target.onError = null; e.target.src = notFound}}
                    ></img>
                <br></br>
                { props.product.prodDesc }
                <br></br>
            </div>
        </div>
    )
}

export default ProductCard;