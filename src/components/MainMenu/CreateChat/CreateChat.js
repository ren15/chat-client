import React from 'react'
import classes from './CreateChat.module.scss'

function CreateChat(props) {
  const [newChat, setNewChat] = React.useState('')

  return (
    <div className={classes.newChat}>
      <div className={classes.newChat__title}>
        <h1>Введите название чата</h1>
      </div>
      <input
        className={classes.newChat__input}
        onChange={(event) => setNewChat(event.target.value)}
      />
      <button
        className={classes.newChat__create}
        onClick={() => props.createChat(newChat)}>
        Создать Чат
      </button>
    </div>
  )
}

export default CreateChat
