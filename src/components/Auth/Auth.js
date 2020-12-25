import React from 'react'
import classes from './Auth.module.scss'

function Auth(props) {
  return (
    <div className={classes.Auth}>
      <div className={classes.Auth__title}>
        <h1>Авторизация</h1>
      </div>
      <div className={classes.Auth__form}>
        <p>Имя пользователя:</p>
        <input type='text' name='auth' />
      </div>
      <div className={classes.Auth__form}>
        <p>Пароль:</p>
        <input type='text' name='auth' />
      </div>
      <div className={classes.Auth__buttons}>
        <button className={classes.Auth__auth}>Войти</button>
        <button className={classes.Auth__register}>Зарегистрироваться</button>
      </div>
    </div>
  )
}

export default Auth
