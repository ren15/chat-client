import React from 'react'
import {io} from 'socket.io-client'
import RoomList from '../MainMenu/RoomList/RoomList'
import classes from './MainMenu.module.scss'

const socket = io('http://localhost:5000/')

function MainMenu(props) {
  socket.on('connect', () => {
    console.log(socket.id)
    socket.on('getChatList', (chatList) => {
      console.log(chatList)
    })
  })

  const user = {
    id: '1',
    name: 'Ilham'
  }

  const [roomList, setRoomList] = React.useState([
    {
      id: '123',
      name: 'Комната №1',
      lastMessage: 'БлаБлаБла',
      usersCount: 4,
      selected: false
    },
    {
      id: '32',
      name: 'Комната №2',
      lastMessage: 'Привет',
      usersCount: 3,
      selected: false
    },
    {
      id: '56',
      name: 'Комната №3',
      lastMessage: 'Во сколько завтра на работу?',
      usersCount: 102,
      selected: false
    }
  ])

  const [newChat, setNewChat] = React.useState('')
  const [searchChat, setSearchChat] = React.useState('')

  const changeSearchChat = (event) => {
    return setSearchChat(event.target.value)
  }

  const selectedRoom = (room) => {
    const newRoomList = roomList.map((el) => {
      el.selected = false
      if (el.id === room.id) {
        el.selected = true
        props.openRoomChat(el)
      }
      return el
    })

    return setRoomList(newRoomList)
  }

  const createChat = (event) => {
    console.log(newChat)
  }

  return (
    <div className={classes.MainMenu}>
      <div className={classes.MainMenu__user}>
        <p className={classes.MainMenu__name}>{user.name}</p>
        <button className={classes.MainMenu__logout}></button>
      </div>
      <input className={classes.MainMenu__input} value={searchChat} />
      <div className={classes.newChat}>
        <button className={classes.newChat__create}>Создать чат</button>
        <div className={classes.newChat__chatName}>
          <input
            className={classes.newChat__input}
            onChange={(event) => setNewChat(event.target.value)}
          />
          <button
            className={classes.newChat__submit}
            onClick={createChat}
            value={newChat}></button>
        </div>
      </div>
      {roomList.length ? (
        <RoomList
          searchChat={searchChat}
          roomList={roomList}
          selectedRoom={selectedRoom}
        />
      ) : (
        <h1 className={classes.MainMenu__chats}>Чаты не найдены!</h1>
      )}
    </div>
  )
}

export default MainMenu
