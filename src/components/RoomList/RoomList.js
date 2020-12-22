import React from 'react'
import Room from './Room/Room'
import classes from './RoomList.module.scss'

function RoomList() {
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
    }
  ]

  return (
    <div className={classes.roomList}>
      <div className={classes.roomList__user}>
        <p className={classes.roomList__name}>{user.name}</p>
        <button className={classes.roomList__logout}></button>
      </div>
      <input className={classes.roomList__input} />
      <ul>
        {roomList.map((room, index) => {
          return (
            <Room
              key={index}
              name={room.name}
              lastMessage={room.lastMessage}
              usersCount={room.usersCount}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default RoomList
