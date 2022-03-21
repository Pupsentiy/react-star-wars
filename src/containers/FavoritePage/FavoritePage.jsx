import React from 'react'

import { useSelector } from 'react-redux';

import styles from './FavoritePage';

const FavoritePage = () => {
    const storeData = useSelector(state => state.favoriteReducer);
    console.log(storeData);
    return(
        <> <h1>FavoritePAge</h1></>
    )
}

export default FavoritePage;