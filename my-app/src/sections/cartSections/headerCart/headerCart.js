import './headerCart.scss';
import React from 'react';
import {useRef, useEffect} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function CartHeader() {
  return (
    <nav className='header-container-cart'>
      <Link to='/Boostrank' className='logo-ig'></Link>  
      <div className='cart-progress'>
        <span className='step active'>
          <span className='number'>1</span>
          <span className='text'>Shopping Cart</span>
          <span className='spacer'></span>
        </span>

        <span className='step'>
          <span className='number'>2</span>
          <span className='text'>Payment</span>
          <span className='spacer'></span>
        </span>

        <span className='step'>
          <span className='number'>3</span>
          <span className='text'>Game activation</span>
        </span>
      </div>
      <div className='header-right'>
        <div className='login-container-header'>
          <Link to='/UserLoginPage' className='user-header'>
            <div className='user-icon-header icon-small-header'></div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default CartHeader;