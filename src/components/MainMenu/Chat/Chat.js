import React from 'react'
import classes from './Chat.module.scss'

function Chat(props) {
  const cls = [classes.chat]
  if (props.selectChat) {
    if (props.selectChat._id === props.chat._id) cls.push(classes.selected)
  }

  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.selectedChat(props.chat)}>
      <span className={classes.chat__back}></span>
      <span className={classes.chat__name}>{props.chat.name}</span>
      <span className={classes.chat__lastMessage}>
        {props.chat.messages.length
          ? props.chat.messages[props.chat.messages.length - 1].text
          : 'Нет сообщений'}
      </span>

      {props.chat.creator === props.user.id ? (
        <button
          className={classes.chat__delete}
          onClick={() => props.deleteChat(props.chat)}>
          X
        </button>
      ) : null}
    </li>
  )
}

export default Chat
