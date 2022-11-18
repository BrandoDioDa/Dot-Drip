import React from 'react';
import notFound from "../view/images/notfound.jpg";


const ProductCard = (props) => {
    var productImage = props.product.prodImage;
    if (productImage === ""){
        productImage = notFound;
    }
    // tHis does not check for a HTTP 404, but when there isnt an image specified it will default to this, need to fix
    return (
        <div>
            <div className='ProductCard'>
                <b>{ props.product.prodName }</b>
                    <br></br>
                    <img 
                        src={productImage} 
                        alt={props.product.prodName} 
                        class="productImage"
                    ></img>
                <br></br>
                { props.product.prodDesc }
                <br></br>
            </div>
        </div>
    )
}

export default ProductCard;