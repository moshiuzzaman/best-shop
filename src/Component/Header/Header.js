import React from 'react';
import logo from '../../images/logo.png';
import "./Header.css"
import { Button, Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap';

const Header = () => {
    return (
             <Container>  
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/shop">Shop</Nav.Link>
                    <Nav.Link href="/review">Order Review</Nav.Link>
                    <Nav.Link href="/manage">Manage Inventory here</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
            </Container>
           
        
            
            
       
    );
};

export default Header;