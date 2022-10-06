import { Link } from 'react-router-dom'
import { LoginForm } from '../../../components/export'
import './Login.scss'


const Login: React.FC = () => {

  return (
    <div className='login-page'>
      <h2 className="login-page__title">Login</h2>
      <div className="login-page__link">Хочу зарегестрироваться <Link to="/auth/registration">Регистрация</Link></div>
      <LoginForm />
    </div>
  )
}

export default Login