import React from 'react'
import {io} from 'socket.io-client'
import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'

const socket = io('http://localhost:5000/')

function App() {
  const [roomList, setRoomList] = React.useState([])
  const [room, setRoom] = React.useState([{messages: []}])

  React.useEffect(() => {
    socket.on('getChatList', (chatList) => {
      setRoomList(chatList)
    })
    socket.on('getMessagesInChat', (messages) => {
      setRoom(messages)
    })
    socket.on('sendMessagesInChat', (messages) => {
      console.log(messages)
      setRoom(messages)
    })
    socket.emit('queryGetChatList')
  }, [])

  const selectedRoom = (room) => {
    socket.emit('queryGetMessagesInChat', room._id)
  }

  const createChat = (newChat) => {
    console.log(newChat)
    const chat = {
      name: newChat,
      creator: 'asd',
      lastMessage: '',
      users: [
        {
          id: '123'
        }
      ],
      messages: []
    }
    socket.emit('createChat', chat)
    socket.emit('queryGetChatList')
  }

  const emitSendMessage = (text, date) => {
    const newMessage = {text, userId: '123', date}
    socket.emit('querySendMessagesInChat', room._id, newMessage)
  }

  return (
    <div className={classes.App}>
      <MainMenu
        roomList={roomList}
        selectedRoom={selectedRoom}
        createChat={createChat}
      />
      <Chat
        room={room}
        emitSendMessage={emitSendMessage}
        selectedRoom={selectedRoom}
      />
    </div>
  )
}

export default App
