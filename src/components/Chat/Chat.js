import React from 'react'
import classes from './Chat.module.scss'
import MyBoard from './MyBoard/MyBoard'

function Chat() {
  const [user, setUser] = React.useState({id: '135', name: 'Ильгам'})

  const [text, setText] = React.useState('')
  const [chatList, setChatList] = React.useState([
    {
      id: 123,
      user: 'Иван',
      text: 'Как дела?',
      date: '12.04'
    },
    {
      id: 125,
      user: 'Петр',
      text: 'Нормально, сам?',
      date: '12.32'
    }
  ])

  const changeText = (event) => {
    setText(event.target.value)
  }

  const sendMessage = (event) => {
    if (text) {
      const now = new Date().toLocaleTimeString().slice(0, -3) // 11:02

      const chatElement = {
        user: user.name,
        id: user.id,
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
        <div className={classes.chat__roomName}>
          <p>Комната</p>
        </div>
      </div>
      <MyBoard user={user} chatList={chatList} />

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
