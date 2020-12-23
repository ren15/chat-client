import React from 'react'
import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'

function App() {
  const [room, setRoom] = React.useState({
    chatId: '',
    name: '',
    selected: false,
    messages: ['']
  })

  const openRoomChat = (room) => {
    return setRoom(room)
  }

  return (
    <div className={classes.App}>
      <MainMenu openRoomChat={openRoomChat} />
      <Chat room={room} />
    </div>
  )
}

export default App
