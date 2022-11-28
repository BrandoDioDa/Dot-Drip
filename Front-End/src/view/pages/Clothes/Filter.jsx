import React, { useState, useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from "react-bootstrap/esm/Button";
import "../../cssDesign/clothes.css";
import "../../cssDesign/filter.css";

const Filter =() => {
    return (
            <Dropdown align="end" autoClose="inside">
             
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Men</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Kids</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    );
}

export default Filter;