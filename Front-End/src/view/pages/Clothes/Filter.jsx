import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import showShirts from './ProductDisplay';
import {setAllProducts, getAllProducts, setProducts} from './ProductDisplay';

import "../../cssDesign/clothes.css";

export default function Filter (props) {

    const handleFunction = (e) => {
        console.log("Show shirts");
    }

    return (
        <div className="container">
            <Dropdown size="normal" align="end" autoClose="inside">
                <Dropdown.Toggle variant="success" id="dropdown-basic">Filter</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Form>
                        <Form.Control size="normal" type="search" placeholder="Search for a product..."></Form.Control>
                    </Form>

                <hr className="hr hr-blurry"/>
                    <Dropdown.Item id="men-search" onClick={props.func}>Men</Dropdown.Item>
                    <Dropdown.Item id="women-search">Women</Dropdown.Item>
                    <Dropdown.Item id="kids-search">Kids</Dropdown.Item>
                <Dropdown.Divider/>
                    <Dropdown.Header>Sort by:</Dropdown.Header>
                    <Dropdown.Item id="price-inc" onClick={props.showShirts}>Price(inc)</Dropdown.Item>
                    <Dropdown.Item id="price-dec" onClick={props.showShoes}>Price(dec)</Dropdown.Item>
                    <Dropdown.Item id="quan-inc" onClick={handleFunction}>Quantity(inc)</Dropdown.Item>
                    <Dropdown.Item id="quan-dec" onClick={handleFunction}>Quantity(dec)</Dropdown.Item>
                <Dropdown.Divider/>
                    <Dropdown.Header>Item Type:</Dropdown.Header>
                    <Dropdown.Item id="shirt-search" onClick={props.showShirts}>Shirt</Dropdown.Item>
                    <Dropdown.Item id="pants-search" onClick={props.showPants}>Shoes</Dropdown.Item>
                    <Dropdown.Item id="unimplemented" onClick={handleFunction}>Other</Dropdown.Item>
                <Dropdown.Divider/>

                   <Button href="#/action-11" variant="outline-info" size="normal">Go to Cart</Button>

                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

//export default Filter;