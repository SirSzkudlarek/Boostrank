import './header.scss';
import React from 'react';
import {useRef, useEffect} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

  

function Header() {
  
  const searchOpen = useRef(null);
  const searchClose = useRef(null);
  const body = document.querySelector('body');

  useEffect(() => {
    const handleClick = event => {
        body.classList.add('search-open');
    };

    const button = searchOpen.current;

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    const handleClick = event => {
        body.classList.remove('search-open');
    };

    const button = searchClose.current;

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav className='header-container'>
        <Link to='/Boostrank' className='logo-ig'></Link>

        <div className='menu'>
          <div className='trendings'>
            <a className='links-nav-menu' href='#'>Trending</a>
            <a className='links-nav-menu' href='#'>Pre-orders</a>
            <a className='links-nav-menu' href='#'>Upcoming</a>
            <a className='links-nav-menu' href='#'>Support 24/7</a>
          </div>

          <div className='product-menu'>
            <div className='glossy'></div>

            <div className='links-nav-menu'>
              <div className='nav pc'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-pc icon-xs'></div>
                  <span className='title'>PC</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav playstation'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-playstation icon-xs'></div>
                  <span className='title'>Playstation</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav xbox'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-xbox icon-xs'></div>
                  <span className='title'>Xbox</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>

              <div className='nav nintendo'>
                <a className='access' href='#'>
                  <div className='icon-platform icon-nintendo icon-xs'></div>
                  <span className='title'>Nintendo</span>
                  <div className='icon-arrow icon-xxxs'></div>
                </a>
              </div>
            </div>

            <form className='search-nav-wrapper'>
              <div className='search-nav-container'>
                <input className='search-input' placeholder='Dragon Age, RPG, sand-box...' itemProp='query-input' autoCapitalize='off' spellCheck='false' autocomplete='off'></input>
                <div ref={searchClose} className='close-search'>+</div>
                <div ref={searchOpen} className='icon-search-input'></div>
                <a className='search-advanced' href='#'>Advanced search</a>
              </div>
            </form>
          </div>
        </div>

        <div className='header-right'>
          <div className='cart-app'>
            <Link to='/Cart' className='cart-container'>
              <div className='icon-cart icon-small-header'></div>
            </Link>
          </div>

          <div className='login-container-header'>
            <Link to='/UserLoginPage' className='user-header'>
              <div className='user-icon-header icon-small-header'></div>
            </Link>
          </div>
        </div>
    </nav>
  );
};

export default Header;