/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useNavigate } from 'react-router-dom';

import { ArrowBackIosNew } from '@mui/icons-material/';

import sl from './GoBack.module.scss';

const GoBack = () => {
    const navigate = useNavigate()

    return (
        <h2
            className={sl.back}
            onClick={() => navigate(-1)}
        >
            <ArrowBackIosNew />
            Go Back
        </h2>
    )
}

export default GoBack;