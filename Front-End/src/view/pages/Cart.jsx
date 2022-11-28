import "../cssDesign/shoppingcart.css"
import Basket from "../../Components/Basket";
import Header from "../../Components/Header";
import Primary from "../../Components/Primary";
import data from '../../data'
import {useState} from 'react';

const Cart =() => {
    const {products} = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if(exist){
            setCartItems(cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x));
        }
        else{
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    };

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } 
        else{
            setCartItems(
                cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x)
            );
        }
    };
    return(
        <div>
<div>
<Header countCartItems={cartItems.length}></Header>
</div>

<div className="container">
<div className="row">
<Primary onAdd={onAdd} products={products}></Primary>
<Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
</div>
</div>
</div>
    );
}
export default Cart;