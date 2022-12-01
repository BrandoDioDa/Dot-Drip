import React from 'react'
import "../view/cssDesign/cart.css"
export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <div className="container">
            <img className='small' src={product.prodImage} alt={product.prodName}/>
        </div>
        <div className="px-5">
            <h3>
                {product.prodName} : {product.prodPrice}
            </h3>
        </div>
    </div>
  )
}
