/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResourse } from '@utils/network'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'

// import sl from './PeoplePage.module.scss';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null)

    const getGesourse = async url => {
        const res = await getApiResourse(url)

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return { name, id, img }
            })

            setPeople(peopleList)
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getGesourse(API_PEOPLE);
    }, []);

    return (
        <>
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
