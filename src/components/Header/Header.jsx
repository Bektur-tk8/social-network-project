import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png' />
        </header>
    )
}

export default Header;