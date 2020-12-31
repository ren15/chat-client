import React from 'react'
import classes from './ChatMessage.module.scss'
import Board from './Board/Board'

function ChatMessage(props) {
  const [text, setText] = React.useState('')

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = () => {
    if (text) {
      const now = new Date()
      props.sendMessage(text, props.user.id, props.user.name, now)
      props.selectedChat(props.chat)
      setText('')
    }
  }

  const sendMessageKeyEnter = (event) => {
    if (text && event.key === 'Enter' && props.chat) {
      sendMessage()
      event.preventDefault()
    }
  }

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div className={classes.chat__chatName}>
          <p>{props.chat.name || null}</p>
        </div>
      </div>
      {props.chat ? (
        <Board user={props.user} messages={props.chat.messages || []} />
      ) : null}

      <div className={classes.chat__sendMessage}>
        <textarea
          className={classes.chat__input}
          placeholder='Введите сообщение'
          rows='1'
          onChange={changeText}
          onKeyPress={sendMessageKeyEnter}
          value={text}></textarea>
        <button
          className={classes.chat__send}
          onClick={sendMessage}
          value={text}></button>
      </div>
    </div>
  )
}

export default ChatMessage
