import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1/users'

export const login = async credentials => {
    try {

        const token = await axios.post(`${BASE_URL}/login`, credentials)

        // console.log(token.data)

        // Persist the token using Window localStorage
        // setItem() first arg is the property name and the second arg is the value
        localStorage.setItem('token', token.data)

        return getUser()

    } catch(err) {
        console.error(err)
    }
}

export const getToken = () => {
    // Use property/key/field name to grap our token
    const token = localStorage.getItem('token')

    // getItem() will return null if there is no key
    if(!token) return null
    // console.log('Grabbing token', token)

    // Parse our token, split using the '.' to isolate our payload so we can create logic to handle our expiration date
    // After we decode our token using atob() which decodes encrypted base64 string, we will use JSON.parse() to make the decoded string into a JS object
    const payload = JSON.parse(atob(token.split('.')[1]))
    // console.log(payload)

    // JWT's expiration is written in seconds, not milliseconds
    if(payload.exp * 1000 < Date.now()) {
        // payload.exp is higher but when it expires, it's less than the current date
        // Token has expired
        localStorage.removeItem('token')
        return null
    }

    // If we have an unexpired token
    return token
}

export const getUser = () => {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

export const logOut = () => {
    localStorage.removeItem('token')
}