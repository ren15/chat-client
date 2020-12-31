import React from 'react'
import classes from './Board.module.scss'
import Message from './Message/Message'
import OtherMessage from './OtherMessage/OtherMessage'

function Board(props) {
  const boardRef = React.useRef(null)
  React.useEffect(() => {
    boardRef.current.scrollTop = boardRef.current.scrollHeight
  }, [props.messages])

  return (
    <div ref={boardRef} className={classes.board}>
      {props.messages.map(
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
