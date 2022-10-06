import * as yup from "yup"
import { ILoginData } from '../../modules/auth/auth.types'

export interface ILoignSchema extends ILoginData {}

export const loginFormSchema = yup.object({
  email: yup.string().email().required('Введите почту'),
  password: yup.string().required('Введите пароль').min( 5 ,'Не менее 5 символов')
}).required()