import React from "react";
import phonesImage from '../../images/phones.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Phone Store</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img className="img" src={phonesImage} alt="phones"/>
      </div>
    </div>
  );
};

export default Header;
