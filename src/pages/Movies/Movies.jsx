import { useEffect } from 'react'
import { getMovies } from '../../utilities/movies-service'
// import { logOut } from '../../utilities/users-service'

const Movies = () => {
    
    // useEffect will invoke after every render - will only run ONCE if the dependency array is empty
    // second arg is the dependency array
    // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
    useEffect(() => {
        // console.log('hello')
        getMovies()
    }, [])

    // Why we are using useEffect:
    // To make HTTP requests the moment the component loads
    // We want to use an empty dependency array to prevent multiple requests to the server

    return (
        <div>
            THIS IS OUR MOVIE PAGE
            {/* <button onClick={logOut}>LOGOUT</button> */}
        </div>
    );
}

export default Movies;
