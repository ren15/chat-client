import React from 'react'
import classes from './Chat.module.scss'
import Board from './Board/Board'

function Chat(props) {
  const [user, setUser] = React.useState({id: '135', name: 'Ильгам'})
  const [text, setText] = React.useState('')

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = () => {
    if (text) {
      const now = new Date()
      props.emitSendMessage(text, now)
      setText('')
      props.selectedRoom(props.room)
    }
  }

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div className={classes.chat__roomName}>
          <p>{props.room.name || null}</p>
        </div>
      </div>
      <Board user={user} chatList={props.room.messages || []} />

      <div className={classes.chat__sendMessage}>
        <textarea
          className={classes.chat__input}
          placeholder='Введите сообщение'
          rows='1'
          onChange={changeText}
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
