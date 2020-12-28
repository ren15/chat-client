import React from 'react'
import classes from './CreateChat.module.scss'

function CreateChat(props) {
  const [newChat, setNewChat] = React.useState('')
  const createChatAndHideWindow = (chat) => {
    props.createChat(chat)
    props.hideWindowCreateChat()
  }
  return (
    <div className={classes.newChat}>
      <div className={classes.newChat__title}>
        <h1>Введите название чата</h1>
      </div>
      <button
        className={classes.newChat__exit}
        onClick={() => props.hideWindowCreateChat()}></button>
      <input
        className={classes.newChat__input}
        onChange={(event) => setNewChat(event.target.value)}
      />
      <button
        className={classes.newChat__create}
        onClick={() => createChatAndHideWindow(newChat)}>
        Создать Чат
      </button>
    </div>
  )
}

export default CreateChat
