import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id 
        for (const id in storedCart){
            // console.log(id);
            // step 2: get the product by using id 
            const addedProduct = products.find(product => product.id === id);
            // step 3: get quantity of the product 

           if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity
             // step 4: add the added product to the saved cart
             savedCart.push(addedProduct);
           }
          
            console.log('added Prodect', addedProduct);
        }
        // step 5: set the cart 
        setCart(savedCart);
    } , [products])

    const handleAddToCard = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
           <div className='products-container'>
            {
                products.map (product => <Product
                  key={product.id}
                  product={product}
                  handleAddToCard={handleAddToCard}
                ></Product>)
            }
           </div>
           <div className="card-container">
             <Cart 
               cart={cart}
               handleClearCart={handleClearCart}
             >
                <Link className='btn-check' to="/orders">
                    <button className='btn-proceed'>
                        Review Order
                        <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                </Link>
             </Cart>
            </div> 
        </div>
    );
};

export default Shop;