import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { Container, Row } from 'react-bootstrap';
import './Products.css'

const Products = (props) => {
    const {setCartCount} = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])
    return (
        <Container>
            <Row>

            {
                products.map(product => <Product setCartCount={setCartCount} product={product} key={product.id}></Product>)
            }
            </Row>
        </Container>
    );
};

export default Products;