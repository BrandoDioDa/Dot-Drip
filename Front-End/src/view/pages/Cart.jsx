import "../cssDesign/shoppingcart.css"
import "../cssDesign/clothes.css"
import Basket from "../../Components/Basket";
import Primary from "../../Components/Primary";
import data from '../../data'
import {useEffect, useState} from 'react';
import {getUserByUsername} from "../../services/userService";
import {getCheckoutByAccount} from "../../services/checkoutService";


const Cart =() => {
    const verify = JSON.parse(localStorage.getItem('userData'));
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

    useEffect(() => {
        getCart();
    }, []);

    async function getCart() {
        const user = await getUserByUsername(verify.username);
        const cart = await getCheckoutByAccount(user.data._id);
        console.log(user.data);
        console.log(cart.data);
    }

    return(
        <div className="BackgroundColor">
            <div className="container-fluid">
                <div className="row">
                    <Primary onAdd={onAdd} products={products}/>
                    <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
                </div>
            </div>
        </div>
    );
}
export default Cart;