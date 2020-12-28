import React from 'react'
import classes from './Message.module.scss'

function Message(props) {
  const date = new Date(props.dateMessage).toLocaleTimeString().slice(0, -3)

  return (
    <div className={classes.message}>
      <div className={classes.message__line}>
        <p className={classes.message__info}>
          {date} - {props.userMessage}
        </p>
        <p className={classes.message__text}>{props.textMessage}</p>
      </div>
    </div>
  )
}

export default Message
