import React from 'react';
import "../view/cssDesign/shoppingcart.css"

export default function Header(props){
    const {countCartItems} = props;
return (

<header className="row block rowCenter">
    <div>
        <a href='#/'>
            <h1>My Cart</h1>
        </a>
    </div>
</header>
);
}

