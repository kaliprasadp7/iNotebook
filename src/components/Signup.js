import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {
    const host = 'http://localhost:3001'
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })

    const handlesignup = (e) => {
        e.preventDefault();
        if(credentials.password === credentials.cpassword){
            props.showAlert("Logged in Successfully", "success")
            createuser(credentials.name, credentials.email, credentials.password)
        }
        else{
            props.showAlert("Password and confirm-password must be same", "danger")
        }
    }

    const createuser = async (name, email, password) => {
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ name, email, password })
        })
        const json = await response.json();
        
        localStorage.setItem('token' , json.authtoken)
        navigate('/')
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div className='container w-50 border border-2 border-primary-subtle rounded-3 p-5 mt-5'>
            <h2>Signup</h2>
            <p>Create an account to use iNotebook</p>
            <form onSubmit={handlesignup}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={credentials.name} minLength={3} onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={credentials.password} minLength={5} onChange={onChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={credentials.cpassword} minLength={5} onChange={onChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup
