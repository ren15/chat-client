import React from 'react'
import classes from './Room.module.scss'

function Room(props) {
  const cls = [classes.room]
  if (props.room.selected) cls.push(classes.selected)
  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.selectedRoom(props.room)}>
      <span className={classes.room__back}></span>
      <span className={classes.room__name}>{props.room.name}</span>
      <span className={classes.room__lastMessage}>
        {props.room.messages.length
          ? props.room.messages[props.room.messages.length - 1].text
          : 'Нет сообщений'}
      </span>
      <span className={classes.room__usersCount}>
        {props.room.users.length} - участников
      </span>
    </li>
  )
}

export default Room
