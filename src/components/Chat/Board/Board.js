import React from 'react'
import classes from './Board.module.scss'
import Message from './Message/Message'
import OtherMessage from './OtherMessage/OtherMessage'

function Board(props) {
  const refBoard = React.useRef(null)
  React.useEffect(() => {
    return () => {
      //refBoard.current.scrollTop = refBoard.current.scrollHeight
    }
  }, [props.chatList])

  return (
    <div ref={refBoard} className={classes.board}>
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

export default Board
