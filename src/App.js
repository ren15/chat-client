import React from 'react'
import {io} from 'socket.io-client'
import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'
import Auth from './components/Auth/Auth'
import PopupLayout from './hoc/PopupLayout/PopupLayout'

const socket = io('http://localhost:5000/')

function App() {
  const [roomList, setRoomList] = React.useState([])
  const [room, setRoom] = React.useState([{messages: []}])
  const [user, setUser] = React.useState(null)

  socket.on('getUser', (user) => {
    setUser(user)
  })

  socket.on('getChatList', async (chatList) => {
    await setRoomList(chatList)
  })
  socket.on('getMessagesInChat', async (messages) => {
    try {
      await setRoom(messages)
    } catch (err) {
      console.warn(err)
    }
  })
  socket.on('sendMessagesInChat', (messages) => {
    setRoom(messages)
  })
  React.useEffect(() => {
    socket.emit('queryGetChatList')
  }, [])

  const logout = () => {
    setUser(null)
  }

  const selectedRoom = (room) => {
    socket.emit('queryGetMessagesInChat', room._id)
  }

  const createChat = (newChat) => {
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

  const emitSendMessage = (text, userId, userName, date) => {
    const newMessage = {text, userId, userName, date}
    socket.emit('querySendMessagesInChat', room._id, newMessage)
  }

  const register = (name, password) => {
    const user = {name, password}
    socket.emit('createUser', user)
  }

  const auth = (name, password) => {
    const user = {name, password}
    socket.emit('queryGetUser', user)
  }

  return (
    <>
      {user ? (
        <div className={classes.App}>
          <MainMenu
            user={user}
            roomList={roomList}
            selectedRoom={selectedRoom}
            createChat={createChat}
            logout={logout}
          />
          <Chat
            user={user}
            room={room}
            emitSendMessage={emitSendMessage}
            selectedRoom={selectedRoom}
          />
        </div>
      ) : (
        <PopupLayout>
          <Auth auth={auth} register={register} />
        </PopupLayout>
      )}
    </>
  )
}

export default App
