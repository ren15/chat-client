import React from 'react'
import {io} from 'socket.io-client'
import ChatMessage from './components/ChatMessage/ChatMessage'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'
import Auth from './components/Auth/Auth'
import PopupLayout from './hoc/PopupLayout/PopupLayout'

const socket = io('https://evening-shelf-49003.herokuapp.com/', {
  withCredentials: true,
  extraHeaders: {
    'my-custom-header': 'abcd'
  }
})

function App() {
  const [chatList, setChatList] = React.useState([])
  const [chat, setChat] = React.useState([{messages: []}])
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    socket.on('getUser', (user) => {
      setUser(() => user)
      if (user) {
        localStorage.setItem('userId', user.id)
      }
    })

    socket.on('getChatList', (chatList) => {
      setChatList(() => chatList)
    })
    socket.on('getMessagesInChat', (chat) => {
      setChat(() => chat)
    })
    socket.emit('queryGetChatList')
    if (localStorage.getItem('userId')) {
      socket.emit('queryGetUserById', localStorage.getItem('userId'))
    }

    return () => {
      socket.off('getUser')
      socket.off('getChatList')
      socket.off('getMessagesInChat')
    }
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setChat(() => {
        return chatList.reduce((acc, val) => {
          if (val._id === chat._id) {
            return (acc = val)
          }
          return acc
        }, {})
      })
    }, 500)
  }, [chatList])

  const selectedChat = (chat) => {
    socket.emit('queryGetChatList')
    setChat(() => {
      return chatList.reduce((acc, val) => {
        if (val._id === chat._id) {
          return (acc = val)
        }
        return acc
      }, {})
    })
  }

  const deleteChat = (event, thisChat) => {
    event.stopPropagation()
    socket.emit('queryDeleteChat', thisChat._id, user.id)
    if (thisChat._id === chat._id) {
      setChat(() => [{messages: []}])
    }
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

  const sendMessage = (text, userId, userName, date) => {
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

  const logout = () => {
    setUser(() => null)
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
            sendMessage={sendMessage}
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
