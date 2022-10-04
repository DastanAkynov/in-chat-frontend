import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store/hooks'
import { login } from '../../../modules/actions.export'
import { ILoginData } from '../../../modules/auth/auth.types'
import './Login.scss'

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
  const [form, setLoginData] = useState<ILoginData>({
    email: '',
    password: ''
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLoginData({...form, [e.target.name]: e.target.value})
  }

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void>=> {
    e.preventDefault()
    try {
      await dispatch(login(form)).unwrap()
      alert(`Seccess login!`)
    } catch(err) {
      alert(err)
    }
  }


  return (
    <div className='modal'>
      <h2>Login</h2>
      <div><Link to="/auth/registration">Registration</Link></div>
      <form className="login-form" onSubmit={loginHandler}>
        <input className="login-form__item" value={form.email} placeholder="email" type="email"  name="email" onChange={changeHandler}/>
        <input className="login-form__item" value={form.password} placeholder="password" type="password"  name="password" onChange={changeHandler}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login