import React from 'react';

export default function Header(props){
    const {countCartItems} = props;
return (

<header className="row block center">
    <div>
        <a href='#/'>
            <h1>My Cart</h1>
        </a>
    </div>
</header>
);
}

