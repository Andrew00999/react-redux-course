/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import GoBack from '@components/PersonPage/GoBack'
import PersonInfo from '@components/PersonPage/PersonInfo'
import PersonImage from '@components/PersonPage/PersonImage'

import UiLoader from '@UI/UiLoader'

import { getApiResourse } from '@utils/network'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { getPeopleImage } from '@services/getPeopleData'
import PropTypes from 'prop-types'

import { API_PERSON } from '@constants/api'

import sl from './PersonPage.module.scss';

const PersonFilms = lazy(() => import('@components/PersonPage/PersonFilms'))

const PersonPage = ({ setErrorApi }) => {
    const [personId, setPesonId] = useState(null)
    const [personInfo, setPesonInfo] = useState(null)
    const [personName, setPesonName] = useState(null)
    const [personImage, setPersonImage] = useState(null)
    const [personFilms, setPersonFilms] = useState(null)
    const [personFavorite, setPersonFavorite] = useState(false)

    const params = useParams()

    const storeData = useSelector(state => state.favoriteReducer)

    useEffect(() => {
        (async () => {
            const id = params.id
            setPesonId(id)
            const res = await getApiResourse(`${API_PERSON}/${id}/`)

            storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false)

            setErrorApi(!res)

            setPesonInfo([
                { title: 'Birth_year', data: res.birth_year },
                { title: 'Eye_color', data: res.eye_color },
                { title: 'Gender', data: res.gender },
                { title: 'Hair_color', data: res.hair_color },
                { title: 'Height', data: res.height },
                { title: 'Mass', data: res.mass },
                { title: 'Skin_color', data: res.skin_color }
            ])

            setPesonName(res.name)
            setPersonImage(getPeopleImage(id))

            res.films.length && setPersonFilms(res.films)
        })()
    }, [])

    return (
        <>
            <GoBack />
            <h2 className={sl.title}>{personName}</h2>
            <div className={sl.person__wrapper}>
                <PersonImage
                    personId={personId}
                    personImage={personImage}
                    personName={personName}
                    personFavorite={personFavorite}
                    setPersonFavorite={setPersonFavorite}
                />
                {personInfo && (
                    <PersonInfo
                        personInfo={personInfo}
                    />
                )}
                {personFilms && (
                    <Suspense fallback={<UiLoader />}>
                        <PersonFilms
                            personFilms={personFilms}
                        />
                    </Suspense>
                )}
            </div>
        </>
    )
}

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);