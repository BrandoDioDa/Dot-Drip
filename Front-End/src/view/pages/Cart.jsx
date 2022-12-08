import "../cssDesign/shoppingcart.css"
import "../cssDesign/clothes.css"
import "../cssDesign/about.css"
import {useEffect, useState} from 'react';
import {getUserByUsername} from "../../services/userService";
import {getCheckoutByAccount} from "../../services/checkoutService";
import {getProductById} from "../../services/productsService";
import Product from "../../Components/Product";
import {Button} from "react-bootstrap";
import axios from "axios";


const Cart =() => {
    //FOR CART INFORMATION
    const verify = JSON.parse(localStorage.getItem('userData'));
    const testing = [];
    const [product, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [finalCart, setFinalCart] = useState([]);
    const [cartObj, setCartObj] = useState();


    //FOR BASKET
    let itemPrice = 0;
    const taxPrice = itemPrice * 0.14;
    const shippingPrice = itemPrice > 2000 ? 0 : 50;
    let totalPrice = (itemPrice + taxPrice + shippingPrice);

    const [data, setData] = useState([]);
    const [couponInput, setCouponInput] = useState(0);
    const [couponDiv, setCouponDiv] = useState('');
    const [currentCoupon, setCurrentCoupon] = useState({});

    useState(() => {
        setCurrentCoupon({name: '', amount: 0})
    })

    const applyCoupon = (e) => {
        e.preventDefault();
        // Check the login ...
        if ( !couponInput ) {
            setCouponDiv(<p>Please enter Coupon!</p>);
        }
        else {
            axios.get(`http://localhost:4000/api/Coupons/${couponInput}`)
                .then(response => {
                    console.log(response);
                    if ( response.status === 200 ) { // Found a thing
                        console.log(response.data.discountAmount);
                        if ( currentCoupon !== response.data.codeName ) {
                            setCurrentCoupon({name: response.data.codeName, amount: response.data.discountAmount});
                        }
                        else {
                            setCouponDiv(<p>Coupon already being used!</p>)
                        }
                    }
                    else if ( response.status === 204 ) { // Wrong password
                        setCouponDiv(<p>Code not found!</p>);
                    }
                    else {                  // Other error
                        // Failed!
                        setCouponDiv(<p>Error getting Coupon. Please try again.</p>);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
    const onAdd = (product) => {
        const exist = product.find(x => x.id === product.id);
        if(exist){
            setProducts(product.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1 } : x));
        }
        else{
            setProducts([...product, {...product, qty: 1}]);
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
        setFinalCart(cart.data.cart);
        console.log(finalCart);

        for(let i = 0; i < finalCart.length; i++){
            const what = await getProductById(finalCart.at(i))
            testing.push(what.data);
        }
        setProducts(testing)
        console.log(finalCart);
    }

    return(
        <div className="BackgroundColor">
            <div className="container-fluid">
                <div className="row">
                    <primary className="block col-4">
                        <h2>Products</h2>
                        <div className="row">
                            {product.map((item) => (
                                <Product key = {item._id} product={item} onAdd={onAdd}/>
                            ))}
                        </div>
                    </primary>
                        <aside className="container-fluid block col-5">
                            <h2>Cart Items</h2>
                            <div>{product.length === 0 && <div>Cart Is Empty</div>}</div>
                            {product.map((item) => (
                                <h4>
                                <div key={item._id} className="row">
                                    <div>{item.prodName}</div>

                                    <div>
                                        <button onClick={() => onAdd(item)} className="add">+</button>
                                        <button onClick={() => onRemove(item)} className="remove">-</button>
                                    </div>

                                    <div className='col-2 text-right'>
                                        {item.inCart} x {item.prodPrice}
                                    </div>
                                </div>
                            </h4>
                            ))}
                            {cartItems.length !== 0 && (
                                <>
                                    <h4>
                                    <hr/>
                                    <div className='row'>
                                        <div className='col-2'>Items Price</div>
                                        <div className='col-1 text-right'>${itemPrice.toFixed(2)}</div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>Tax Price</div>
                                        <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'>Shipping Price</div>
                                        <div className='col-1 text-right'>${shippingPrice.toFixed(2)}</div>
                                    </div>

                                    <div className='row'>
                                        <div className='col-2'><strong>Total Price</strong></div>
                                        <div className='col-1 text-right'>${(totalPrice)*(1-currentCoupon.amount).toFixed(2)}</div>
                                    </div>
                                    <input value={couponInput} onChange={(e) => setCouponInput(e.target.value)} type="username" placeholder="coupon"/>
                                    <button onClick={applyCoupon}>Check</button>
                                    {couponDiv}
                                    </h4>
                                </>
                            )}
                        </aside>
            </div>
        </div>
            <div className="container-fluid">
                <Button className="m-2 btn-success" onClick={getCart}>Send to cart</Button>
                <Button className="m-2 btn-success" onClick={getCart}>Purchase</Button>
            </div>
        </div>
    );
}
export default Cart;