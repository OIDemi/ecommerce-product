import React, { useState } from "react";
import Logo from "../images/logo.svg";
import shoppingCart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";

import { Button, Drawer, Space } from "antd";
import Menu from "../images/icon-menu.svg";
const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav>
        <Space className='mobile-nav'>
          <Button
            type='primary'
            onClick={showDrawer}
            className='mobile-nav-btn'
          >
            <img src={Menu} alt='Menu' />
          </Button>
        </Space>
        <Drawer
          placement='left'
          closable={true}
          onClose={onClose}
          open={open}
          key='left'
          className='mobile-menu-nav'
        >
          <nav>
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
        </Drawer>
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
