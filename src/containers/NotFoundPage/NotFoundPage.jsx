import React from 'react'
import { useLocation } from 'react-router-dom';
import img from './img/NotFound.jpeg'
import styles from './NotFoundPage.module.css';

const  NotFoundPage = () => {
    let location = useLocation()

    return(
        <>
        <p className={styles.text}>No match for <u>{location.pathname}</u></p>
        <img className={styles.img} src={img} alt='Not Found'/>
        </>
    )
}

export default NotFoundPage;