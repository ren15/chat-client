import React from 'react'
import classes from './ChatMessage.module.scss'
import Board from './Board/Board'

function Chat(props) {
  const [text, setText] = React.useState('')
  const [chat, setChat] = React.useState(props.chat)

  React.useEffect(() => {
    console.log('render')
    setChat(() => props.chat)
  }, [props.chat])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = () => {
    if (text && chat) {
      const now = new Date()
      props.emitSendMessage(text, props.user.id, props.user.name, now)
      setText('')
      props.selectedChat(chat)
    }
  }

  const sendMessageKeyEnter = (event) => {
    if (text && event.key === 'Enter' && chat) {
      sendMessage()
      event.preventDefault()
    }
  }

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div className={classes.chat__chatName}>
          <p>{chat.name || null}</p>
        </div>
      </div>
      {chat ? (
        <Board
          user={props.user}
          selectedChat={props.selectedChat}
          chat={chat.messages || []}
        />
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

export default Chat
