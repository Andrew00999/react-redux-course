
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