import React from 'react'
import CryptoJS from 'crypto-js'
import classes from './Auth.module.scss'

function Auth(props) {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isNotAuth, setIsNotAuth] = React.useState(false)

  const auth = () => {
    props.auth(userName, password)
    setTimeout(() => {
      if (!props.user) setIsNotAuth(true)
      else setIsNotAuth(false)
    }, 2000)
  }

  return (
    <div className={classes.Auth}>
      <div className={classes.Auth__title}>
        <h1>Авторизация</h1>
      </div>
      <div className={classes.Auth__form}>
        <p>Имя пользователя:</p>
        <input
          type='text'
          name='userName'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <div className={classes.Auth__form}>
        <p>Пароль:</p>
        <input
          type='password'
          name='password'
          onChange={(event) =>
            setPassword(CryptoJS.MD5(event.target.value).toString())
          }
        />
      </div>
      <div className={classes.Auth__buttons}>
        <button
          className={classes.Auth__auth}
          onClick={() => auth(userName, password)}>
          Войти
        </button>
        <button
          className={classes.Auth__register}
          onClick={() => props.register(userName, password)}>
          Зарегистрироваться
        </button>
      </div>
      {isNotAuth ? (
        <p className={classes.Auth__errorAuth}>
          Ошибка авторизации, проверьте ваш логин и/или пароль!
        </p>
      ) : null}
    </div>
  )
}
export default Auth
