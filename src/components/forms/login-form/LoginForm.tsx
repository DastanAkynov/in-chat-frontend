import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider, useForm } from 'react-hook-form'
import { useAppDispatch } from '../../../app/store/hooks'
import { ILoginData } from '../../../modules/auth/auth.types'
import { loginFormSchema } from '../../../shared/schamas/login.schema'
import FormField from '../form-filed/FormField'
import './LoginForm.scss'

const LoginForm: React.FC = () => {

  const form = useForm<ILoginData>({
    resolver: yupResolver(loginFormSchema),
    mode: "onBlur"
  })

  const dispatch = useAppDispatch()

  const onSubmit = async (data: ILoginData): Promise<void>=> {
  }

  return (
      <FormProvider {...form}>
        <form className="login-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" placeholder="email" width="200px" />
          <FormField name="password" placeholder="Пароль"  width="200px" />
          <button className="login-form__btn" type="submit">Login</button>
        </form>
      </FormProvider>
  )
}

export default LoginForm;