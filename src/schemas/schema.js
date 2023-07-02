import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
const nameRules = /^[а-яА-Яa-zA-Z]+$/
const birthDateRules = /([0-3][1]|[0][0-9]|[1-2][0-9])\.([0-9]|[1][0-2])\.([1][9][0-9][0-9])|([2][0][0-2][0-9])/gm;
// const phoneNumberRules = /\+7\(\d{3}\) \d{3}-\d{2}-\d{2}/gs;




export const setPasswordSchema = yup.object().shape({
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Пожалуйста, создайте более надежный пароль" })
        .required("Обязательно"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Обязательно"),
});
export const infoSchema = yup.object().shape({
    firstName: yup
        .string()
        .min(2)
        .matches(nameRules, { message: "Напишите свое имя правильно" })
        .required('Заполните'),
    lastName: yup.string()
        .min(2)
        .matches(nameRules, { message: "Напишите свою фамилию правильно" })
        .required('Заполните'),
    dateOfBirth: yup
        .string()
        .min(6)
        .matches(birthDateRules, { message: "Заполните дату рождения" })
        .required('Заполните'),
});

export const loginSchema = yup.object().shape({
    firstname: yup
        .string()
        .min(2)
        .matches(nameRules, { message: "Неверный логин или пароль" })
        .required(),
    password: yup
        .string()
        .min(8)
        .max(15)
        .matches(passwordRules, { message: "Неверный логин или пароль" })
        .required()
});

export const signupSchema = yup.object().shape({
    firstname: yup
        .string()
        .min(2)
        .matches(nameRules, { message: "Неверный логин или пароль" })
        .required(),
    email: yup
        .string()
        .email('Неверный логин')
        .required('Электронная почта обязательна')
});

export const phoneNumberSchema = yup.object().shape({
    phoneNumber: yup
    .string()
    .min(10)
    // .matches(phoneNumberRules, { message: "Введите номер телефона" })
    .required('Номер телефона обязателен')
})