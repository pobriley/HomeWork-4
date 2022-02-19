import React, {useState} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,} from "reactstrap";

function Menu() {
        const [isOpen, setIsOpen] = useState(false);
        const toggle = () => setIsOpen(!isOpen);


    return (
        <Navbar className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" 
        expand="md">
        <NavbarBrand href="/">SE Thailand</NavbarBrand>
        <NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>

                <Nav className='mr-auto navbar'>
                    <NavItem>
                        <NavLink href="/home">Project List</NavLink>
                    </NavItem>
                </Nav>

                <Nav className='mr-auto navbar'>
                    <NavItem>
                        <NavLink href="/add">Add New Product</NavLink>
                    </NavItem>
                </Nav>
                
        </Collapse>
        </Navbar>
    )
}

export default Menu