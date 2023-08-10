import './userLoginInterface.scss';
import {useRef, useEffect} from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

function UserLoginInterface() {

  const visablePassword = useRef(null);
  const body = document.querySelector('body');
  body.classList.add('visable-password');

  useEffect(() => {
    const handleClick = event => {
        if (body.classList.contains('hidden-password')) {
          body.classList.remove('hidden-password');
          body.classList.add('visable-password');
          changeVisibility.type = 'text';
        } else {
          body.classList.remove('visable-password');
          body.classList.add('hidden-password');
          changeVisibility.type = 'password';
        }
    };

    const button = visablePassword.current;
    const changeVisibility = document.getElementById('changeVisibility');

    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('click', handleClick);
    };
  }, []);
  
  return (
    <section className='login-interface-wrapper'>
      <div className='register'>
        <Link to='/' className='logo-ig'></Link>
        <h1 className='register-title'> Sign in to your TreeGames Account</h1>   
        <div className='panel-log-via'>
          <a className='log-via log-via-fb'>
            <div className='icon'>
              <div className='icon-xs icon-fb'></div>
            </div>
          </a>

          <a className='log-via log-via-gmail'>
            <div className='icon'>
              <div className='icon-xs icon-gmail'></div>
            </div>
          </a>

          <a className='log-via log-via-steam'>
            <div className='icon'>
              <div className='icon-xs icon-steam'></div>
            </div>
          </a>

          <a className='log-via log-via-apple'>
            <div className='icon'>
              <div className='icon-xs icon-apple'></div>
            </div>
          </a>

          <a className='log-via log-via-epicGames'>
            <div className='icon'>
              <div className='icon-xs icon-epicGames'></div>
            </div>
          </a>
        </div>

        <div className='login'>
          <div className='orSeparetor'>
            <span>or</span>
          </div>

          <form className='login-form'>
            <div className='login-inputs'>
              <label className='label-email' for="email">Email</label>
              <div className='input-wrapper'>
                <input type='text' className='input email-input' name='email' placeholder='Enter your email adress'></input>
              </div>

              <label className='label-email' for="password">Password</label>
              <div className='input-wrapper'>
                <input type='password' className='input password-input' id='changeVisibility' name='password' placeholder='Enter your password'></input>
                <div ref={visablePassword} aria-label='Show password' className='password-button'>
                  <span className='show-icon'></span>
                </div> 
              </div>

              <a role='button' className='sign-in-button'>SIGN IN</a>
            </div>
          </form>

          <div className='forgot-password-section'>
            <a className='forget-password'>Forgot your password?</a>
          </div>

          <a role='button' className='create-acc-button'>CREATE ACCOUNT</a>
        </div>
      </div>
    </section>
  );
}

export default UserLoginInterface;

