import React from 'react'
import classes from './MyBoard.module.scss'
import Message from '../../Message/Message'
import OtherMessage from '../../OtherMessage/OtherMessage'

function MyBoard(props) {
  return (
    <div className={classes.board}>
      {props.chatList.map(
        (el, index) =>
          (props.user.id === el.id ? (
            <Message
              key={index}
              textMessage={el.text}
              dateMessage={el.date}
              userMessage={el.user}
            />
          ) : (
            <OtherMessage
              key={index}
              textMessage={el.text}
              dateMessage={el.date}
              userMessage={el.user}
            />
          )) || null
      )}
    </div>
  )
}

export default MyBoard
