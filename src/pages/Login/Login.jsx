import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'

const Login = ({ setUser }) => {
    const [message, setMessage] = useState("We'll never share your email with anyone else.")

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const user = await login(credentials)
            // Once we get our user back, update out App.jsx user state witht the user's first name
            if(user) {
                setUser(user)
                // Redirect to Movies page after successful login
                navigate('/movies')
            } else {
                throw new Error
            }
                
        } catch(err) {
            setMessage('Log in failed. Try again.')
        }
    }

    return (
        <form className="mx-auto w-50 border p-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="email"
                    onChange={handleChange}
                    value={credentials.email}
                />
                    <div id="emailHelp" className="form-text">{message}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    onChange={handleChange}
                    value={credentials.password}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Login