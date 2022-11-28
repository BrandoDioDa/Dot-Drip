import React from 'react';
import Product from './Product'

export default function Primary(props){
    const {products, onAdd} = props;
return( 
<primary className="block col-4">
    <h2>Products</h2>
    <div className="row">
        {products.map((product) => (
            <Product key = {product.id} product={product} onAdd={onAdd}></Product>
        ))}

    </div>

</primary>
);
}

