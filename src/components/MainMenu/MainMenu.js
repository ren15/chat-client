import React from 'react'
import RoomList from '../MainMenu/RoomList/RoomList'
import classes from './MainMenu.module.scss'

function MainMenu() {
  const user = {
    id: '32',
    name: 'Ilham'
  }

  const roomList = [
    {
      id: '123',
      name: 'Комната №1',
      lastMessage: 'БлаБлаБла',
      usersCount: 4
    },
    {
      id: '32',
      name: 'Комната №2',
      lastMessage: 'Привет',
      usersCount: 3
    },
    {
      id: '56',
      name: 'Комната №3',
      lastMessage: 'Во сколько завтра на работу?',
      usersCount: 102
    },
    {
      id: '123',
      name: 'Комната №1',
      lastMessage: 'БлаБлаБла',
      usersCount: 4
    },
    {
      id: '32',
      name: 'Комната №2',
      lastMessage: 'Привет',
      usersCount: 3
    },
    {
      id: '56',
      name: 'Комната №3',
      lastMessage: 'Во сколько завтра на работу?',
      usersCount: 102
    },
    {
      id: '123',
      name: 'Комната №1',
      lastMessage: 'БлаБлаБла',
      usersCount: 4
    },
    {
      id: '32',
      name: 'Комната №2',
      lastMessage: 'Привет',
      usersCount: 3
    },
    {
      id: '56',
      name: 'Комната №3',
      lastMessage: 'Во сколько завтра на работу?',
      usersCount: 102
    }
  ]

  const [searchChat, setSearchChat] = React.useState('')

  const changeSearchChat = (event) => {
    return setSearchChat(event.target.value)
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
        <RoomList searchChat={searchChat} roomList={roomList} />
      ) : (
        <h1 className={classes.MainMenu__chats}>Чаты не найдены!</h1>
      )}
    </div>
  )
}

export default MainMenu
