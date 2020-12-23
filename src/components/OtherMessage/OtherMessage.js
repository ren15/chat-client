import React from 'react'
import classes from './OtherMessage.module.scss'

function OtherMessage(props) {
  return (
    <div className={classes.message}>
      <div className={classes.message__line}>
        <p className={classes.message__info}>
          {props.dateMessage} - {props.userMessage}
        </p>
        <p className={classes.message__text}>{props.textMessage}</p>
      </div>
    </div>
  )
}

export default OtherMessage
