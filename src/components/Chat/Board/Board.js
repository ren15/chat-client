import React from 'react'
import classes from './Board.module.scss'
import Message from './Message/Message'
import OtherMessage from './OtherMessage/OtherMessage'

function Board(props) {
  return (
    <div className={classes.board}>
      {props.chatList.map(
        (el, index) =>
          (props.user.id === el.userId ? (
            <Message
              key={index}
              textMessage={el.text}
              dateMessage={el.date}
              userMessage={el.userName}
            />
          ) : (
            <OtherMessage
              key={index}
              textMessage={el.text}
              dateMessage={el.date}
              userMessage={el.userName}
            />
          )) || null
      )}
    </div>
  )
}

export default Board
