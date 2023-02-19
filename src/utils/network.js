import { HTTP, HTTPS } from '@constants/api'

// JDOC function documentation
/**
 * Change url request from HTTP to HTTPS
 * @param {String} url - url for changing
 * @returns {String} - url with HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url

    return result
}


// JDOC function documentation
/**
 * Sending fetch request function
 * @param {String} url - url for request 
 * @returns {String} - Propmise with response result
 */
export const getApiResourse = async url => {
    try {
        const res = await fetch(url)

        if (!res.ok) {
            console.error(res.status)
            return false
        }

        return await res.json()
    } catch (error) {
        console.error(error.message)
        return false
    }
}

// (async () => {
//     const body = await getApiResourse(SWAPI_ROOT + SWAPI_PEOPLE)
//     console.log(body);
// })();


export const makeConcurrentRequest = async url => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res
}