import React from 'react'
import {io} from 'socket.io-client'
import ChatMessage from './components/ChatMessage/ChatMessage'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'
import Auth from './components/Auth/Auth'
import PopupLayout from './hoc/PopupLayout/PopupLayout'

const socket = io('http://localhost:5000/')

function App() {
  const [chatList, setchatList] = React.useState([])
  const [chat, setchat] = React.useState([{messages: []}])
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    // Создание обработчиков событий
    socket.on('getUser', async (user) => {
      await setUser(() => user)
      if (user) {
        localStorage.setItem('userId', user.id)
      }
    })

    socket.on('getChatList', async (chatList) => {
      try {
        await setchatList(() => chatList)
      } catch (err) {
        console.warn(err)
      }
    })
    socket.on('getMessagesInChat', async (messages) => {
      try {
        console.log(messages)
        await setchat(() => messages)
      } catch (err) {
        console.warn(err)
      }
    })
    // socket.on('sendMessagesInChat', async (messages) => {
    //   await setchat(() => messages)
    // })

    socket.emit('queryGetChatList')
    if (localStorage.getItem('userId')) {
      socket.emit('queryGetUserById', localStorage.getItem('userId'))
    }
  }, [])

  const logout = () => {
    setUser(() => null)
  }

  const selectedChat = (chat) => {
    socket.emit('queryGetMessagesInChat', chat._id)
  }

  const deleteChat = (chat) => {
    socket.emit('queryDeleteChat', chat._id, user.id)
  }

  const createChat = (newChat) => {
    const chat = {
      name: newChat,
      creator: user.id,
      messages: []
    }
    socket.emit('createChat', chat)
    socket.emit('queryGetChatList')
  }

  const emitSendMessage = (text, userId, userName, date) => {
    const newMessage = {text, userId, userName, date}
    socket.emit('querySendMessagesInChat', chat._id, newMessage)
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
            deleteChat={deleteChat}
            user={user}
            selectChat={chat}
            chatList={chatList}
            selectedChat={selectedChat}
            createChat={createChat}
            logout={logout}
          />

          <ChatMessage
            user={user}
            chat={chat}
            emitSendMessage={emitSendMessage}
            selectedChat={selectedChat}
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
