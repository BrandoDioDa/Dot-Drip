import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Product from "./Product";

export default function Basket(props){
    const itemPrice = 0;
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

    return (
    <aside className="block col-3">
    <h2>Cart Items</h2>
        {props.map((item) => (
            <div key = {item._id}> </div>
        ))}
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
    )}
    </aside>
);
}
