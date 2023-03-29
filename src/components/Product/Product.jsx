import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
               <h5 className='product-name'>{name}</h5>
               <h6>Price: ${price}</h6>
               <p>Manufacturer: {seller}</p> 
               <p>Rating: {ratings}star</p>   
            </div> 
            <button className='btn-card'>Add To Card</button>              

        </div>
    );
};

export default Product;