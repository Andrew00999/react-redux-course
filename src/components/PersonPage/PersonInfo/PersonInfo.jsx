import React from 'react'
import PropTypes from 'prop-types'

import sl from './PersonInfo.module.scss';

const PersonInfo = ({ personInfo }) => {
    return (
        <ul className={sl.characteristics}>
            {personInfo.map(({ title = '-', data = '-' }) => (
                data && (
                    <li key={title} className={sl.item}>
                        <p>{title}: {data}</p>
                    </li>
                )
            ))}
        </ul>
    )
}

PersonInfo.propTypes = {
    personInfo: PropTypes.array
}

export default PersonInfo;