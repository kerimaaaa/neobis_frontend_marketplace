import React, { useState } from "react";
import { Form, Formik } from "formik";
import { Link } from 'react-router-dom'
import CustomInput from "../customInput/customInput";
import { ArrowLeftIcon,EyeIcon } from '@heroicons/react/24/solid';
import '../style/style.css';
import logo from '../../images/logo.svg';
import lock from '../../images/lock.svg';
import './setPassword.css';
import '../signup/signup.css';
import { setPasswordSchema } from "../../schemas/schema";






const SetPassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="page_container">
            <div className="img_bcg">

                <img className="logo" src={logo} alt="logo" />
                <h1 className="title">MOBI MARKET</h1>

            </div>
            <Formik
                initialValues={{ password: "" }}
                onSubmit={onSubmit}
                validationSchema={setPasswordSchema}
            >

                {({ isSubmitting }) => (
                    <Form className="form_container">
                        <div className="navbar">
                            <Link to="/" className="go_back_link">
                                <ArrowLeftIcon
                                    className="signup_arrow"
                                    width={24}
                                    height={24} /></Link>
                            <h2 className="setpassword_page_title">Регистрация</h2>
                            <button className='setpassword_eye' onClick={togglePassword}>
                            <EyeIcon
                                width={24}
                                height={18}
                            />
                        </button>
                        </div>
                        <img className="setpassword_lock" src={lock} alt="lock" />
                        <h3 className="setpassword_header" >Придумайте пароль</h3>
                        <p className="setpassword_text" >Минимальная длина — 8 символов.
                            <br /> Для надежности пароль должен
                            <br />  содержать буквы и цифры.</p>
                        <CustomInput
                            name="password"
                            type={passwordShown ? "text" : "password"}

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
};
export default SetPassword;