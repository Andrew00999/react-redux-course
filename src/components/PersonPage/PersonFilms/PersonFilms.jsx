/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { makeConcurrentRequest, changeHTTP } from '@utils/network'

import sl from './PersonFilms.module.scss';

const PersonFilms = ({ personFilms }) => {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const filmsHTTPS = personFilms.map(url => changeHTTP(url))
            const response = await makeConcurrentRequest(filmsHTTPS)

            setFilmsName(response);
        })()
    }, [])

    return (
        <div>
            <ul className={sl.films}>
                {filmsName
                    .sort((a, b) => a.episode_id - b.episode_id)
                    .map(({ title, episode_id }) =>
                        <li key={episode_id}>
                            <span>Episode {episode_id}</span>
                            <span> : </span>
                            <span>{title}</span>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

PersonFilms.propTypes = {
    personFilms: PropTypes.array
}

export default PersonFilms;