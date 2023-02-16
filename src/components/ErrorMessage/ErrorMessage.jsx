import React from 'react'
import sl from './ErrorMessage.module.scss';

const ErrorMessage = () => {
    return (
        <>
            <p className={sl.error_text}>Ooops! Something wrong...</p>
        </>
    )
}

export default ErrorMessage;