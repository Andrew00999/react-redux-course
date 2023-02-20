import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { setPersonToFavorite, removePersonToFavorite } from '@store/actions'

import { FavoriteBorder, Favorite } from '@mui/icons-material';

import sl from './PersonImage.module.scss';

const PersonImage = ({
    personId,
    personImage,
    personName,
    personFavorite,
    setPersonFavorite
}) => {
    const dispatch = useDispatch()

    const dispatchFavoritePeople = () => {
        if (personFavorite) {
            dispatch(removePersonToFavorite(personId))
            setPersonFavorite(false)
        } else {
            dispatch(setPersonToFavorite({
                [personId]: {
                    name: personName,
                    img: personImage
                }
            }))
            setPersonFavorite(true)
        }
    }

    return (
        <div className={sl.person__image__block}>
            <img
                className={sl.person__image}
                src={personImage}
                alt={personName}
            />
            <button onClick={dispatchFavoritePeople} className={sl.favorite}>
                {personFavorite
                    ? <Favorite />
                    : <FavoriteBorder />
                }
            </button>
        </div>
    )
}

PersonImage.propTypes = {
    personId: PropTypes.string,
    personImage: PropTypes.string,
    personName: PropTypes.string,
    personFavorite: PropTypes.bool,
    setPersonFavorite: PropTypes.func
}

export default PersonImage;