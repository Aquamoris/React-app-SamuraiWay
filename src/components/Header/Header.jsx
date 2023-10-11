import React from "react";
import style from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt='react'/>

            <div className={style.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
}

export default Header;