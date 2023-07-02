import React, { useState,useEffect } from "react";
import { Form, Formik } from "formik";
import { Link, useNavigate } from 'react-router-dom'
import CustomInput from "../customInput/customInput";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import '../style/style.css';
import logo from '../../images/logo.svg';
import './signup.css';
import { signupSchema } from "../../schemas/schema";
import { getapi } from "../../API/api";





const Signup = () => {
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleUserChange = (e) => {
        setUserName(e.target.value)

    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    useEffect(() =>{
        localStorage.setItem('email', JSON.stringify(email))
        localStorage.setItem('username', JSON.stringify(username))  
    }, [email])

    const onSubmit = (e) => {
        navigate('/twosetpassword')
        console.log('submitting')
    }
    return (
        <div className="page_container">
            <div className="img_bcg">

                <img className="logo" src={logo} alt="logo" />
                <h1 className="title">MOBI MARKET</h1>

            </div>
            <Formik
                initialValues={{ username: "", email: "" }}
                onSubmit={onSubmit}
                // validationSchema={signupSchema}
            >

                {({ isSubmitting }) => (
                    <Form className="form_container" >
                        <div className="navbar">
                            <Link to="/" className="go_back_link">
                                <ArrowLeftIcon
                                    className="signup_arrow"
                                    width={24}
                                    height={24} /></Link>
                            <h2 className="page_title">Регистрация</h2>
                        </div>
                        <CustomInput
                            name="username"
                            type="text"
                            placeholder="Имя пользователя"
                            value={username}
                            onChange={(e) => handleUserChange(e)}
                        />
                        <CustomInput
                            name="email"
                            type='email'
                            placeholder="Почта"
                            value={email}
                            onChange={(e) => handleEmailChange(e)}
                        />
                        <button
                            disabled={isSubmitting}
                            type="submit"
                            className="submit_btn"
                        >
                            Далее
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default Signup;