import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Signin = () => {
    const [FormData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: ''
    })

    const [errors, setErrors] = useState({})
    const [valid, setValid] = useState(true)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        let isvalid = true;
        let validationErrors = {}

        if (FormData.fname === "" || FormData.fname === null) {
            isvalid = false;
            validationErrors.fname = "First name is required"
        }
        if (FormData.lname === "" || FormData.lname === null) {
            isvalid = false;
            validationErrors.lname = "Last name is required"
        }

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
        if (FormData.cpassword !== FormData.password) {
            isvalid = false;
            validationErrors.cpassword = " password does not match"
        }

        setErrors(validationErrors)
        setValid(isvalid)

        if (Object.keys(validationErrors).length === 0) {
            axios.post('http://localhost:4000/users', FormData)
                .then(result => {
                    alert("Registered successfully")
                    navigate('/login')
                })
                .catch(err => console.log(err))
        }
    }



    return (
        <>
            <form onSubmit={handleSubmit}>

                <h3>Create Your Account</h3>

                <label>First Name<span class="text-danger">*</span></label>
                <input type="text" name="fname" class="form-control" placeholder="Enter First Name" onChange={(event) => setFormData({ ...FormData, fname: event.target.value })} />
                {
                    valid ? <></> :
                        <span className='text-danger'>{errors.fname};</span>
                }
                <br/>
                <label>Last Name<span class="text-danger">*</span></label>
                <input type="text" name="Lname" class="form-control" placeholder="Enter Last Name" onChange={(event) => setFormData({ ...FormData, lname: event.target.value })} />
                {
                    valid ? <></> :
                        <span className='text-danger'>{errors.lname};</span>
                }
                <br/>
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
                <label>Confirm Password<span class="text-danger">*</span></label>
                <input type="password" name="confirmpassword" class="form-control" placeholder="Confirm Password" onChange={(event) => setFormData({ ...FormData, cpassword: event.target.value })} />

                <button class="btn btn-primary float-end">Signup Now</button>

            </form>
            <br/>
            <p class="text-center text-secondary">If you have account, Please <Link to="/login">Login Now</Link></p>
        </>
    )
}

export default Signin