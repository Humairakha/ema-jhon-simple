import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {

     const {user, logOut} = useContext(AuthContext)

     const handleLogout = () => {
        
     }

    return (
        <nav className='header'>
           <img src={logo} alt="" />
           <div>
              <Link to="/">Shop</Link>
              <Link to="/orders">Orders</Link>
              <Link to="/inventory">Inventory</Link>
              <Link to="/login">Log In</Link>   
              <Link to="/signup">Sign up</Link> 
              { 
              user && <span className='user-info'>Welcome : {user.email} <button onClick={handleLogout}>Sign Out</button></span>
               }
           </div>
        </nav>
    );
};

export default Header;