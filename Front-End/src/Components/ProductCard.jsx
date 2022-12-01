import { Card, Button } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import "../view/cssDesign/ProductCard.css"
import {getCheckoutByAccount, editCheckout} from "../services/checkoutService";
import {getUserByUsername} from "../services/userService";
import React, {useEffect, useState} from "react";

const ProductCard = ({ obj }) => {
    const verify = JSON.parse(localStorage.getItem('userData'));
    const nav = useNavigate();

    async function handleClick() {
        //If user is not logged in then take user to signup page
        if (localStorage.getItem('userData') === 'null'){
            nav('/SignUp');
        } else { //verify user and checkout data then add product to users cart
            const response = await getUserByUsername(verify.username);
            const cart = await getCheckoutByAccount(response.data._id);

            if (cart.data.account === response.data._id) { //Verify user has a cart
                    await editCheckout({
                        $push: {
                            cart: obj._id
                        }
                    }, cart.data._id)
            } else {
                console.log("User information does not match checkout");
            }
            console.log(cart.data.cart);
        }
    }
    const dynamicButton = <Button className="m-2 btn-success" onClick={handleClick}>To Cart</Button>;
    return (
        <Card className="ProductCard" style={{ width: '20rem'}}>
            <img src={obj.prodImage}/>
            <Card.Body>
                <Card.Title>{obj.prodName}</Card.Title>
                <Card.Text>In Stock : {obj.prodQuan}</Card.Text>
                <Card.Text>Price : {obj.prodPrice}</Card.Text>
                { dynamicButton }
                <Link className="btn btn-outline-dark" to={`/Products/${obj._id}`}>More...</Link>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;