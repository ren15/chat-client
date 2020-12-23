import React from 'react'
import RoomList from '../MainMenu/RoomList/RoomList'
import classes from './MainMenu.module.scss'

function MainMenu(props) {
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

  return (
    <div className={classes.MainMenu}>
      <div className={classes.MainMenu__user}>
        <p className={classes.MainMenu__name}>{user.name}</p>
        <button className={classes.MainMenu__logout}></button>
      </div>
      <input
        className={classes.MainMenu__input}
        onChange={changeSearchChat}
        value={searchChat}
      />
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
