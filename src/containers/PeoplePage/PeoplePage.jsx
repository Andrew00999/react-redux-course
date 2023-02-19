/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { withErrorApi } from '@hoc-helpers/withErrorApi'
import PeopleList from '@components/PeoplePage/PeopleList'
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation'
import { getApiResourse, changeHTTP } from '@utils/network'
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData'
import { API_PEOPLE } from '@constants/api'
import { useQueryParams } from '@hooks/useQueryParams'

// import sl from './PeoplePage.module.scss';

const PeoplePage = ({ setErrorApi }) => {
    const [people, setPeople] = useState(null)
    const [prevPage, setPrevPage] = useState(null)
    const [nextPage, setNextPage] = useState(null)
    const [counterPage, setCounterPage] = useState(1)

    const query = useQueryParams()
    const queryPage = query.get('page')

    console.log(queryPage, prevPage, nextPage);

    const getGesourse = async url => {
        const res = await getApiResourse(url)

        console.log(res);

        if (res) {
            const peopleList = res.results.map(({ name, url }) => {
                const id = getPeopleId(url)
                const img = getPeopleImage(id)

                return { name, id, img }
            })

            setPeople(peopleList)
            setPrevPage(changeHTTP(res.previous))
            setNextPage(changeHTTP(res.next))
            setCounterPage(getPeoplePageId(url))
            setErrorApi(false)
        } else {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        getGesourse(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getGesourse={getGesourse}
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people} />}
        </>
    )
}

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);
