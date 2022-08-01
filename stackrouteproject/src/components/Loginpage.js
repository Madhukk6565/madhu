import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import  { useEffect, useState } from 'react';
// import axios from 'axios';
import "../App.css";
function Loginpage() {

    const [formValues, setFormValues] = useState([]);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const nav = useNavigate();
    const check = () => {
        axios.get("http://localhost:8086/userservice/" + formValues.userEmail + "/" + formValues.password)
            .then((res) => {
                setFormValues(res);
                if (res.data == true) {
                    nav("/H")
                }
                
            }).catch(
                nav("/")
            );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        console.log(e.target.value);
        setIsSubmit(true);
    };

    useEffect(() => {
        check()
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.userEmail) {
            errors.userEmail = "Email is required!";
        } else if (!regex.test(values.userEmail)) {
            errors.userEmail = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length >10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
    };

    return (
    <div>
        <h1 class="loginword">Welcome  To  Nutritionist </h1>
        <div>

            
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <h3><div className="ui message success" style={{color :"red"}}>Enter valid credentials</div></h3>
                ) : null}

                <form onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>
                    <div className="ui divider"></div>
                    <div className="ui form">
                        <div className="field">
                            <label className="form-label"
                                for="form3Example3">Email</label>
                            <input
                                id="form3Example1" className="form-control"
                                type="text"
                                name="userEmail"
                                placeholder="Email"
                                value={formValues.userEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.userEmail}</p>
                        <div className="field">
                            <label className="form-label"
                                for="form3Example3">Password</label>
                            <input
                                id="form3Example2" className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="loginerror">{formErrors.password}</p>
                        <span>New User </span><Link to="/S" style={{ textDecoration: "none", color: "green" }}> Sign up here </Link>
                        <button className="btn btnm1 button btn-success">Submit</button>                    </div>
                </form>
            </div>

        </div>
    </div>   
    );
}

export default Loginpage;