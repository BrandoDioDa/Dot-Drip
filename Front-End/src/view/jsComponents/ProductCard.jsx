import React from 'react';

const ProductCard = (props) => {
    return (
        <div>
            <div className='ProductCard'>
                <b>{ props.product.prodName }</b>
                <div>
                    <img src={props.product.prodImage}></img>
                </div>
                <br></br>
                { props.product.prodDesc }
                <br></br>
            </div>
        </div>
    )
}

export default ProductCard;