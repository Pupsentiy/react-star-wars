import { HTTP, HTTPS } from '@constants/api'

/**
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
 */
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS) : url;
    
    return result;
}

/**
 * Отправляет запрос Fetch
 * @param {String} url - url для запроса 
 * @returns {Promise} - Promise с результатом запроса 
 */
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

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json())
    }))

    return res;
}    