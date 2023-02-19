import React from 'react'
import PropTypes from 'prop-types'

import sl from './PersonImage.module.scss';

const PersonImage = ({ personImage, personName }) => {
    return (
        <img
            className={sl.person__image}
            src={personImage}
            alt={personName}
        />
    )
}

PersonImage.propTypes = {
    personImage: PropTypes.string,
    personName: PropTypes.string
}

export default PersonImage;