import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/store/hooks'
import { setLogout } from '../../../modules/actions.export'
import styles from './Header.module.scss'

const Header = () => {
  const token = useAppSelector(state => state.auth.accessToken)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(setLogout())
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.headerContainer}`}>
        <div className="container">
          <div className={`${styles.content}`}>
            <h1 className={styles.logo}>Logo</h1>
            <div className={styles.menu}>
              <nav>
                <Link className={styles.link} to="/">Главная</Link>
                <Link className={styles.link}  to="/chat">Чат</Link>
              </nav>
              <div className={styles.auth}>
                { token ?
                  <button className={styles.link} onClick={logoutHandler}>Ввыйти</button>
                  : 
                   <Link className={styles.link} to="/auth/login">Авторизоваться</Link>
                }
                <Link className={styles.link}  to="/dashboard">Профиль</Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header