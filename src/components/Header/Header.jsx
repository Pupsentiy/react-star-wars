import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styles from './Header.module.css';

const Header = () => {
    // const url = useLocation()
    // console.log(url);
    return(
        <div className={styles.container}>
            <ul className={styles.list__container}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/people/?page=1">People</NavLink></li>
                <li><NavLink to="/not-found" >Not Found</NavLink></li>
            </ul>
        </div>
    )
}

export default Header;

// className={url.pathname.includes("people") && styles.list__item_active}