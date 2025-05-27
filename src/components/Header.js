import React from "react";
import Logo from "../images/logo.svg";
import shoppingCart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
const Header = () => {
  return (
    <header>
      <nav>
        <img src={Logo} alt='Sneakers' />
        <ul>
          <li>
            <a href='/'>Collections</a>
          </li>
          <li>
            <a href='/'>Man</a>
          </li>
          <li>
            <a href='/'>Women</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
        </ul>
      </nav>
      <div className='profile-container'>
        <img src={shoppingCart} alt='Cart' />
        <img src={Avatar} alt='Profile' />
      </div>
    </header>
  );
};

export default Header;
