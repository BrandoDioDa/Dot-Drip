import { Card, Button } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import "../view/cssDesign/ProductCard.css"
import {getCheckoutByAccount, editCheckout, checkCart} from "../services/checkoutService";
import {editProduct} from "../services/productsService";
import {getUserByUsername} from "../services/userService";
import React, {useEffect, useState} from "react";

const ProductCard = ({ obj }) => {
    const [inStock, setInStock] = useState(obj.prodQuan);
    const verify = JSON.parse(localStorage.getItem('userData'));
    const nav = useNavigate();

    async function handleClick() {
        //If user is not logged in then take user to signup page
        if (localStorage.getItem('userData') === 'null'){
            nav('/SignUp');
        } else { //verify user and checkout data then add product to users cart
            const response = await getUserByUsername(verify.username);
            const cart = await getCheckoutByAccount(response.data._id);
            const check = await checkCart(obj._id);
            console.log(check.data);
            if (cart.data.account === response.data._id) {//Verify user has a cart
                if(obj.inCart > 0){
                    obj.inCart = obj.inCart + 1;
                    obj.prodQuan = obj.prodQuan - 1;
                    setInStock(obj.prodQuan);
                    await editProduct(obj ,obj._id);
                    console.log(obj);
                } else {
                    obj.inCart = obj.inCart + 1;
                    obj.prodQuan = obj.prodQuan - 1;
                    setInStock(obj.prodQuan);
                    console.log(obj);
                    await editCheckout({
                        $push: {
                            cart: obj._id
                        }
                    }, cart.data._id);
                    await editProduct(obj ,obj._id);
                }
            } else {
                console.log("User information does not match checkout");
            }
            console.log(cart.data.cart);
        }
    }
    let dynamicButton = <Button className="m-2 btn-success" onClick={handleClick}>To Cart</Button>;

    if(inStock === 0) //If product is out of stock then set the button to disabled and change the text
        dynamicButton = <Button className="m-2 btn-success" onClick={handleClick} disabled>OUT</Button>;

    return (
        <Card className="ProductCard" style={{ width: '20rem'}}>
            <img src={obj.prodImage}/>
            <Card.Body>
                <Card.Title>{obj.prodName}</Card.Title>
                <Card.Text>In Stock : {inStock}</Card.Text>
                { dynamicButton }
                <Link className="btn btn-outline-dark" to={`/Products/${obj._id}`}>More...</Link>
            </Card.Body>
        </Card>
    )
}

export default ProductCard;