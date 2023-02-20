import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import PeopleList from '@components/PeoplePage/PeopleList'

import sl from './FavoritePage.module.scss';

const FavoritePage = () => {
    const [people, setPeople] = useState([])

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        const arr = Object.entries(storeData)

        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    ...item[1]
                }
            })

            console.log('res >>>', res);

            setPeople(res)
        }
    }, [storeData])

    return (
        <div>
            <h1 className={sl.title}>Favorites Page</h1>
            {people.length
                ? <PeopleList people={people} />
                : <h1 className={sl.title}>Please, add your favorite characters !</h1>
            }
        </div>
    )
}

export default FavoritePage;