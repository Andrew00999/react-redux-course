import React from 'react'
import PropTypes from 'prop-types'

import loader from '@static/loader.svg'

import sl from './UiLoader.module.scss';

const UiLoader = () => {
    return (
        <img
            src={loader}
            alt="loader"
            className={sl.loader}
        />
    )
}

UiLoader.propTypes = {
    exampleProp: PropTypes.string
}

export default UiLoader;