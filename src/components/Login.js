import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const host = 'http://localhost:3001'
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const handlelogin = (e) => {
        e.preventDefault();
        loginuser(credentials.email, credentials.password)
    }

    const loginuser = async (email, password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        // console.log(json)

        if (json.success === true) {
            props.showAlert("Loggedin Successfully", "success")
            localStorage.setItem('token', json.authtoken)
            navigate('/')
        }
        else {
            props.showAlert("Please enter correct credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container w-50 border border-2 border-primary-subtle rounded-3 p-5 mt-5'>
            <h2>Login</h2>
            <p>Get access to your personalised notes</p>
            <form onSubmit={handlelogin}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="loginemail" name="email" value={credentials.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="loginpassword" name="password" value={credentials.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login
