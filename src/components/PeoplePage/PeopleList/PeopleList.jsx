import React from 'react'
import { Link } from 'react-router-dom'

import sl from './PeopleList.module.scss'

import PropTypes from 'prop-types'

const PeopleList = ({ people }) => {
    return (
        <ul className={sl.list}>
            {people.map(({ name, id, img }) =>
                <li className={sl.list_item} key={id}>
                    <Link to={`/people/${id}`} className={sl.linkId}>
                        <img src={img} alt={name} />
                        <p>{name}</p>
                    </Link>
                </li>
            )}
        </ul>
    )
}

PeopleList.propTypes = {
    people: PropTypes.array
}

export default PeopleList;