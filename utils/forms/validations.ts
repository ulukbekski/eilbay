
import * as yup from "yup"



export const validations = yup.object({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
    password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
    username: yup.string().required("Имя ползователья обязательна!"),
    confirmPassword: yup.string().required("Подтверждение пароля обязательно")
    .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать'),
  })
  
export const PasswordValidations = yup.object({
    password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
    confirmPassword: yup.string().required("Подтверждение пароля обязательно")
    .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать'),
  })

export const LoginValidations = yup.object({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
    password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
  })

export const EmailValidations = yup.object({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
  })