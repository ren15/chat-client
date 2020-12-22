import React from 'react'
import classes from './Chat.module.scss'
import Message from '../Message/Message'

function Chat() {
  const [text, setText] = React.useState('')
  const [chatList, setChatList] = React.useState([])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = (event) => {
    if (text) {
      const now = new Date().toLocaleTimeString().slice(0, -3) // 11:02

      const chatElement = {
        user: 'Я',
        text: event.target.value,
        date: now
      }
      setChatList([...chatList, chatElement])
      setText('')
    }
  }

  return (
    <div className={classes.chat}>
      <div className={classes.chat__header}>
        <div>
          <p>Комната</p>
        </div>
      </div>
      <div className={classes.chat__board}>
        {chatList.map(
          (el, index) =>
            (
              <Message
                key={index}
                text={el.text}
                date={el.date}
                user={el.user}
              />
            ) || null
        )}
      </div>
      <div className={classes.chat__input}>
        <textarea
          className={classes.chat__text}
          placeholder='Введите сообщение'
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
