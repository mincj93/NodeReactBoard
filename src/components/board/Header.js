import React from "react";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

////////////////////////////////////////
import style from '../../style/header.module.css';  // styled-component로 CSS 적용

////////////////////////////////////////
const lg = console.log;



////////////////////////////////////////
const Header = () => {
    return (

        <div className={style.header}>
            <Link to='/'>
                <img src="/sibaDog.png" className={style.header_img} alt="img" />
            </Link>
            <Link to='/' className={style.menu}>홈</Link>
            <Link to='/boardList' className={style.menu}>| 게시판</Link>
        </div>

    );
}

export default Header;