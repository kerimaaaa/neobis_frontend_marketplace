import React, { useState } from "react";
import phone from "../../images/phone.svg"
import NumberInput from "../customNumberInput/numberInput";
import { Form, Formik, useFormik } from "formik";
import './setNumber.css';
import { phoneNumberSchema } from "../../schemas/schema";
import codeIcon from '../../images/codeIcon.svg'


const SetNumber = () => {
    const [code, setCode] = useState(false);
    const { resetForm } = useFormik({
    });
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        resetForm(actions);
    };

    const handleClick = (actions) => {
        resetForm(actions)
        setCode(true)

    }
    return (

        <div className="number_container">
            <div className="number_content">
                {code ? (
                    <>
                        <div>
                            <h2 className="header_title">Изменить номер телефона</h2>
                            <img src={codeIcon} alt="phone icon" />
                            <h3 className="header_subtitle">Введите код из СМС</h3>

                        </div>
                        <div>
                            <Formik
                                initialValues={{ code: "" }}
                                onSubmit={onSubmit}
                            >

                                {({ isSubmitting }) => (
                                    <Form className="phone">

                                        <NumberInput
                                            name="code"
                                            type="tel"
                                            placeholder="0 0 0 0"
                                        />
                                        <p className="header_text" >Повторный запрос</p>
                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="submit_btn"

                                        >
                                            ОК
                                        </button>

                                    </Form>
                                )}
                            </Formik>
                        </div>

                    </>
                ) : (
                    <>
                        <div>
                            <h2 className="header_title">Изменить номер телефона</h2>
                            <img src={phone} alt="phone icon" />
                            <h3 className="header_subtitle">Введите номер телефона</h3>
                            <p className="header_text">Мы отправим вам СМС с кодом <br />
                                подтверждения</p>
                        </div>

                        <div>
                            <Formik
                                initialValues={{ phoneNumber: "" }}
                                onSubmit={onSubmit}
                                validationSchema={phoneNumberSchema}
                            >

                                {({ isSubmitting }) => (
                                    <Form className="phone">

                                        <NumberInput
                                            name="phoneNumber"
                                            type="tel"
                                            placeholder="+7-(700)-(000)-(00)-(00)"
                                        />

                                        <button
                                            disabled={isSubmitting}
                                            type="submit"
                                            className="submit_btn"
                                            onClick={() => handleClick()}

                                        >
                                            Далее
                                        </button>

                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default SetNumber;