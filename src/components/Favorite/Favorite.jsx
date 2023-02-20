import React, { useState, useEffect } from 'react'
import { Bookmark } from '@mui/icons-material';
import { useSelector } from 'react-redux';


import sl from './Favorite.module.scss';

const Favorite = () => {
    const [counter, setCounter] = useState(0)
    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const length = Object.keys(storeData).length;
        length.toString().length > 2 ? setCounter('...') : setCounter(length)
    }, [storeData]);

    return (
        <div className={sl.link__wrapper}>
            <span className={sl.link__counter}>{counter}</span>
            <Bookmark />
        </div>
    )
}

export default Favorite;