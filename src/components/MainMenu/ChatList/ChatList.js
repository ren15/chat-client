import React from 'react'
import Chat from '../Chat/Chat'
import classes from '../ChatList/ChatList.module.scss'

function ChatList(props) {
  const strRegex = new RegExp(props.searchChat, 'i')

  return (
    <ul className={classes.ChatList}>
      {props.chatList
        .filter((chat) => strRegex.test(chat.name))
        .map((chat, index) => {
          return (
            <Chat
              user={props.user}
              deleteChat={props.deleteChat}
              key={index}
              selectChat={props.selectChat}
              chat={chat}
              selectedChat={props.selectedChat}
            />
          )
        })}
    </ul>
  )
}

export default ChatList
