import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {

    const {img, name, seller, price, ratings} = props.product;
    const handleAddToCard = props.handleAddToCard;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
               <h5 className='product-name'>{name}</h5>
               <h6>Price: ${price}</h6>
               <p>Manufacturer: {seller}</p> 
               <p>Rating: {ratings}star</p>   
            </div> 
            <button onClick={() => handleAddToCard(props.product)} className='btn-card'>
                Add To Card
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>              

        </div>
    );
};

export default Product;