import React from 'react'
import classes from './Room.module.scss'

function Room(props) {
  return (
    <li className={classes.room}>
      <span className={classes.room__back}></span>
      <span className={classes.room__name}>{props.name}</span>
      <span className={classes.room__lastMessage}>{props.lastMessage}</span>
      <span className={classes.room__usersCount}>
        {props.usersCount} - участников
      </span>
    </li>
  )
}

export default Room
