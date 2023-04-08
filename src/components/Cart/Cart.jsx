import React, { Children } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = ({ cart, handleClearCart, children }) => {
   
    // const card = props.card; //option 1
    // const {card} = props;  // option 2 

    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart){
        //--- option 1 ---//
        //  if (product.quantity === 0){
        //     product.quantity = 1;
        //  }
        //--- option 2 ----//
        product.quantity = product.quantity || 1;
        
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart'>
           <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p> 
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                Clear Cart 
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;