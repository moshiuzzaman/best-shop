import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Shop.css";
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const product10=fakeData.slice(0,12);
    const [cart,setCart]=useState([])
    const addToCartHandler = (product)=>{
        console.log("Product added" , product);
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <Container>
            <Row>
                <Col className="shopLeft"> 
                    {
                        product10.map(pd=><Product addToCartHandler={addToCartHandler} product={pd} key={pd.key}></Product>)
                    }
                </Col>
                <Col xs={4} className="shopright">
                    <Cart cart={cart}></Cart>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Shop;