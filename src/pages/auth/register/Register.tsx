import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../../app/store/hooks'
import { register } from '../../../modules/actions.export'
import { IRegisterData } from '../../../modules/auth/auth.types'
import styles from './Register.module.scss'

const Register: React.FC = () => {
  const dispatch = useAppDispatch()
  const [form, setForm] = useState<IRegisterData>({
    firstName: '',
    email: '',
    password: ''
  })

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const registrHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<void>=> {
    e.preventDefault()
    try {
      await dispatch(register(form)).unwrap()
      alert(`Seccess registration!`)
    } catch(err) {
      alert(err)
    }
  }

  return (
    <div>
      <h2>Registration</h2>
      <div><Link to="/auth/login" className={styles}>Login</Link></div>
      <form className="register-form" onSubmit={registrHandler} >
        <input className="register-form__item" value={form.firstName} placeholder="text" type="text" name="firstName" onChange={changeHandler}/>
        <input className="register-form__item" value={form.email} placeholder="email" type="email"  name="email" onChange={changeHandler}/>
        <input className="register-form__item" value={form.password} placeholder="password" type="password"  name="password" onChange={changeHandler}/>
        <button type="submit">Registration</button>
      </form>
    </div>
  )
}

export default Register