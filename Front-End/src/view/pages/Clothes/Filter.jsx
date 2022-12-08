import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { getAllProducts } from './ProductDisplay';

import "../../cssDesign/clothes.css";

export default function Filter (props) {

    return (
        <div className="container">
            <Dropdown size="normal" align="end" autoClose="inside">
                <Dropdown.Toggle variant="success" id="dropdown-basic">Filter</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Form>
                        <Form.Control size="normal" type="search" onChange={props.search} placeholder="Search for a product..."></Form.Control>
                    </Form>

                    <hr className="hr hr-blurry"/>
                    <Dropdown.Header>Sort by:</Dropdown.Header>
                    <Dropdown.Item id="price-inc" onClick={props.sortByPriceAsc}>Price ↑</Dropdown.Item>
                    <Dropdown.Item id="price-dec" onClick={props.sortByPriceDesc}>Price ↓</Dropdown.Item>
                    <Dropdown.Item id="quan-inc" onClick={props.sortByQuantityAsc}>Quantity ↑</Dropdown.Item>
                    <Dropdown.Item id="quan-dec" onClick={props.sortByQuantityDesc}>Quantity ↓</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Header>Item Type:</Dropdown.Header>
                    <Dropdown.Item id="shirt-search" onClick={props.showShirts}>Shirt</Dropdown.Item>
                    <Dropdown.Item id="shoes-search" onClick={props.showShoes}>Shoes</Dropdown.Item>
                    <Dropdown.Item id="pants-search" onClick={props.showPants}>Pants</Dropdown.Item>
                    <Dropdown.Item id="socks-search" onClick={props.showSocks}>Socks</Dropdown.Item>


                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
