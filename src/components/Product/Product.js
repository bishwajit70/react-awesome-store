import React from 'react';
import { Card, Button} from 'react-bootstrap';
import ProductModal from '../ProductModal/ProductModal';
import './Product.css'

const Product = (props) => {
    const product = props.product
    const {setCartCount} = props;
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 pt-5 mb-2'>
            <Card className='h-100'>
                <Card.Img variant="top" className='h-80 p-3' src={product.image} />
                <Card.Body>
                    <Card.Title>{product.title.slice(0, 10)}</Card.Title>
                    <Card.Text className='text-start'>
                        {product.description.slice(0, 60) + ' .....'}
                    </Card.Text>
                    <div className='buttons'>
                        <Button onClick={setCartCount} className='bg-success' variant="primary">Add To Cart</Button>
                        <ProductModal product={props.product}></ProductModal>
                    
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Product;