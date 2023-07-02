import React, { useContext, useState } from "react";
import { Form, Formik } from "formik";
import { Link } from 'react-router-dom'
import CustomInput from "../customInput/customInput";
import { EyeIcon, Eyes } from '@heroicons/react/24/solid';
import '../style/style.css';
import logo from '../../images/logo.svg';
//import { loginSchema } from "../../schemas/schema";
import { AuthContext } from "../../interceptors/authProvider";
import { instance } from "../../API/api";




const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const onSubmit = async () => {
    try {
      const res = await instance.post('token/', username, password)
        .then(response => {
          localStorage.setItem('users', JSON.stringify(response.data))
          localStorage.setItem('access-token', res.data.accessToken);
          localStorage.setItem('refresh-token', res.data.refreshToken);
        })


    } catch (err) {
      console.error('Login error: ', err);

    }
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleUserChange = (e) => {
    setUsername(e.target.value)
  }
  const togglePassword = (e) => {
    e.preventDefault()
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="page_container">
      <div className="img_bcg">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="title">MOBI MARKET</h1>
      </div>
      <Formik
        initialValues={{ firstname: "", password: "", }}
        onSubmit={onSubmit}
        //validationSchema={loginSchema}
      >
        {({ isSubmitting }) => (
          <Form className="form_container">

            <CustomInput
              name="firstname"
              id="firstname"
              type="text"
              placeholder="Имя пользователя"
              value ={username}
              onChange={(e) => handleUserChange(e)}
            />
            <CustomInput
              name="password"
              type={passwordShown ? "text" : "password"}
              placeholder="Пароль"
              value ={password}
              onChange={(e) => handlePasswordChange(e)}
            />
            <button className='eye' onClick={togglePassword}>
              <EyeIcon
                width={24}
                height={20}
              />
            </button>
            <button
              disabled={isSubmitting}
              type="submit"
              className="submit_btn"
            >
              Войти
            </button>
            <Link to="/signup" className='link'>Зарегистрироваться</Link>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Login;