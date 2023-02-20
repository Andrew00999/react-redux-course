import {
    SET_PERSON_TO_FAVORITE,
    REMOVE_PERSON_FROM_FAVORITE
} from '@store/actions/actionTypes'


export const setPersonToFavorite = person => (
    {
        type: SET_PERSON_TO_FAVORITE,
        payload: person
    }
)

export const removePersonToFavorite = personId => (
    {
        type: REMOVE_PERSON_FROM_FAVORITE,
        payload: personId
    }
)