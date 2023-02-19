import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import UiButton from '@UI/UiButton'

import sl from './PeopleNavigation.module.scss';

const PeopleNavigation = ({
    getGesourse,
    prevPage,
    nextPage,
    counterPage
}) => {

    const handleChangePrev = () => getGesourse(prevPage)
    const handleChangeNext = () => getGesourse(nextPage)

    return (
        <div className={sl.nav__block}>
            <Link to={`/people/?page=${counterPage - 1}`}>
                <UiButton
                    text="Prev"
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                />
            </Link>
        </div>
    )
}

PeopleNavigation.propTypes = {
    getGesourse: PropTypes.func,
    prevPage: PropTypes.string,
    nextPage: PropTypes.string,
    counterPage: PropTypes.number
}

export default PeopleNavigation;