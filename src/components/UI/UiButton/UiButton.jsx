import React from 'react'
import PropTypes from 'prop-types'

import sl from './UiButton.module.scss';

const UiButton = ({ text, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={sl.button}
        >
            {text}
        </button>
    )
}

UiButton.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
}

export default UiButton;

