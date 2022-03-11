
export const getApiResource = async (url) => {
    try {
        const res = await fetch(url);   // это асинхрон

        if (!res.ok) {
            console.error('could not fetch.', res.status)
            return false;
        }

        return await res.json()
    } catch (error) {
        console.error('could not fetch.', error.message)
        return false;
    }
    // fetch(url)  без async                                                        
    // .then(res => res.json())                    это промисы
    // .then(body => console.log(body))
    // .catch(error => console.log(error.message))                                                     

}

// getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//     .then(body => console.log(body))

    // (async () => {
    //     const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
    //     console.log(body)
    // })()    