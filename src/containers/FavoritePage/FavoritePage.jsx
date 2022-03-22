import React, { useState, useEffect } from 'react'

import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList'

import styles from './FavoritePage';

const FavoritePage = () => {
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {

    }, []);
    
    return(
        <> 
        <h1>FavoritePAge</h1>
        <PeopleList people={people}/>
        </>
    )
}

export default FavoritePage;