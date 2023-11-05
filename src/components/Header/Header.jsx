import React from "react";
import s from './Header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png' />
            <div>
                {props.isAuth ? props.login :  <NavLink to={'/login'} className={s.loginBlock}>Login</NavLink> }
                
            </div>
        </header>
    )
}

export default Header;