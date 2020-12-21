import React from 'react'
import classes from './Message.module.scss'

function Message(props) {
  return (
    <div className={classes.message}>
      <p className={classes.message__info}>
        {props.date} - {props.user}
      </p>
      <p className={classes.message__text}>{props.text}</p>
    </div>
  )
}

export default Message
