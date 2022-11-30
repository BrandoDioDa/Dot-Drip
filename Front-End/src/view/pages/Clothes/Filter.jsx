import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import "../../cssDesign/clothes.css";

const Filter =() => {
    return (
            <Dropdown size="normal" align="end" autoClose="inside">
                <Dropdown.Toggle variant="success" id="dropdown-basic">Filter</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Form>
                        <Form.Control size="normal" type="search" placeholder="Search for a product..."></Form.Control>
                    </Form>

                <Dropdown.Divider/>
                    <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
                        
                <Dropdown.Divider/>

                   <Button href="#/action-4" variant="outline-info" size="normal">Go to Cart</Button>

                </Dropdown.Menu>
            </Dropdown>
            
    );
}

export default Filter;