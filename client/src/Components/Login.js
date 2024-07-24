import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const [FormData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}

        if (FormData.email === "" || FormData.email === null) {
            isvalid = false;
            validationErrors.email = "Email is required"
        } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
            isvalid = false;
            validationErrors.email = "Email is not valid"
        }

        if (FormData.password === "" || FormData.password === null) {
            isvalid = false;
            validationErrors.password = "Password is required"
        } else if (FormData.password.length < 6) {
            isvalid = false;
            validationErrors.email = "password length at least 6 character"
        }

        axios.get('http://localhost:4000/users', FormData)
            .then(result => {
                result.data.map(user => {
                    if (user.email === FormData.email) {
                        if (user.password === FormData.password) {
                            alert("Login Successfully")
                            navigate('/')
                        } else {
                            isvalid = false;
                            validationErrors.password = "Wrong Password;"
                        }
                    }
                })
                setErrors(validationErrors)
                setValid(isvalid)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <h3>Login to Your Account</h3>

                <label>Email<span class="text-danger">*</span></label>
                <input type="email" name="email" class="form-control" placeholder="Enter Email" onChange={(event) => setFormData({ ...FormData, email: event.target.value })} />
                {
                    valid ? <></> :
                        <span className='text-danger'>{errors.email};</span>
                }
                <br/>
                <label>Password<span class="text-danger">*</span></label>
                <input type="password" name="password" class="form-control" placeholder="Enter Password" onChange={(event) => setFormData({ ...FormData, password: event.target.value })} />
                {
                    valid ? <></> :
                        <span className='text-danger'>{errors.password};</span>
                }
                <br/>
                <button class="btn btn-primary float-end">Login Now</button>

            </form>
        
            <p class="text-center text-secondary">If you don't have account, Please <Link to="/signin">Sign Up</Link></p>
        </>
    )
}

export default Login