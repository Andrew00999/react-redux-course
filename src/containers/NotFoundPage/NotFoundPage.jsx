import React from 'react'
import { useLocation } from 'react-router-dom';

import sl from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    let nav = useLocation()


    return (
        <>
            <h1 className={sl.title}>
                Error 404 ( Page not found ) <br />
                Cannot find: {nav.pathname}
            </h1>
        </>
    )
}

export default NotFoundPage