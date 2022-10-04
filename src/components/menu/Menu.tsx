import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/store/hooks'
import { setLogout } from '../../modules/actions.export'
import './Menu.scss'

const Menu: React.FC = () => {
  const token = useAppSelector(state => state.auth.accessToken)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(setLogout())
  }

  return (
    <div className="menu container">
      <h1 className="menu-title">Menu</h1>
      <nav className="nav">
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item"  to="/dashboard">Dashboard</Link>
        { token ?
          <button className="nav-item" onClick={logoutHandler}>Logout</button>
          : 
           <Link className="nav-item"  to="/auth/login">Authorization</Link>
        }
      </nav>
    </div>
  )
}

export default Menu