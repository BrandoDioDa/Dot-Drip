import React from 'react'

export default function Product(props) {
    const {product, onAdd} = props;
  return (
    <div>
        <img className='small' src={product.prodImage} alt={product.prodName}/>
        <h3>{product.prodName}</h3>
        <div>${product.prodPrice}</div>
        <div>
            <button onClick={() => onAdd(product)}>Add To Cart</button>
        </div>

    </div>
  )
}
