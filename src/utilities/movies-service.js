import axios from 'axios'
import { getToken } from './users-service'

const BASE_URL = 'http://localhost:8080/api/v1/movies'

export const getMovies = async () => {
    try {
        const options = {
            headers: {
                // We are atatching the token to our Authorization header
                // Prefacing with 'Bearer' is recommended in HTTP specification
                Authorization: `Bearer ${getToken()}`
            }
        }
        
        const response = await axios.get(BASE_URL, options)
        
        return response
        // console.log(response)
    } catch(err) {
        console.log(err)
    }
}