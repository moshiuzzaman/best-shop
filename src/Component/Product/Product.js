import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./Product.css"

const Product = (props) => {
    const { name, price, img, seller, stock}=props.product;
    return (
            <Row className="product">
                <Col xs={4}>
                    <img className="product-image" src={img} alt=""/>
                </Col>
                <Col>
                    <h5 className="product-name">{name}</h5>
                    <p><small>By: {seller}</small></p>
                    <p className="product-p">Price: ${price}</p>
                    <p ><small>only {stock} left in stock - order soon</small></p>
                    <Button onClick={()=>props.addToCartHandler(props.product)} variant="info">Add To Cart</Button>
                </Col>
            </Row>
    );
};

export default Product;