import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className = { navClass => navClass.isActive ? s.active : s.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className = { navClass => navClass.isActive ? s.active : s.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to="" className = { navClass => navClass.isActive ? s.active : s.item }>News</NavLink>
            </div>
            <div>
                <NavLink to="" className = { navClass => navClass.isActive ? s.active : s.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to="" className = { navClass => navClass.isActive ? s.active : s.item}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/users" className = { navClass => navClass.isActive ? s.active : s.item}>Users</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;