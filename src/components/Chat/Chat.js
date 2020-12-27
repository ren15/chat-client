import React from 'react'
import classes from './Chat.module.scss'
import Board from './Board/Board'

function Chat(props) {
  const [text, setText] = React.useState('')

  React.useEffect(() => {
    //props.selectedRoom(props.room)
  }, [])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = () => {
    if (text && props.room) {
      const now = new Date()
      props.emitSendMessage(text, props.user.id, props.user.name, now)
      setText('')
      props.selectedRoom(props.room)
    }
  }

  const sendMessageKeyEnter = (event) => {
    if (text && event.key === 'Enter' && props.room) {
      sendMessage()
      event.preventDefault()
    }
  }

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div className={classes.chat__roomName}>
          <p>{props.room.name || null}</p>
        </div>
      </div>
      {props.room ? (
        <Board
          user={props.user}
          selectedRoom={props.selectedRoom}
          chatList={props.room.messages || []}
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
