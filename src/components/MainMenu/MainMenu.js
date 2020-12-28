import React from 'react'
import PopupLayout from '../../hoc/PopupLayout/PopupLayout'
import Loader from '../Loader/Loader'
import ChatList from '../MainMenu/ChatList/ChatList'
import classes from './MainMenu.module.scss'
import CreateChat from './CreateChat/CreateChat'

function MainMenu(props) {
  const [searchChat, setSearchChat] = React.useState('')
  const [formCreateChat, setFormCreateChat] = React.useState(false)
  const hideWindowCreateChat = () => {
    setFormCreateChat(false)
  }

  const changeSearchChat = (event) => {
    return setSearchChat(event.target.value)
  }

  return (
    <div className={classes.MainMenu}>
      <div className={classes.MainMenu__user}>
        <p className={classes.MainMenu__name}>{props.user.name}</p>
        <button
          className={classes.MainMenu__logout}
          onClick={() => props.logout()}></button>
      </div>

      <div className={classes.newChat}>
        <button
          className={classes.newChat__create}
          onClick={() => {
            setFormCreateChat(true)
          }}>
          Создать чат
        </button>
        <input
          className={classes.newChat__input}
          value={searchChat}
          placeholder='Поиск...'
          onChange={changeSearchChat}
        />
        {formCreateChat ? (
          <PopupLayout>
            <CreateChat
              user={props.user}
              createChat={props.createChat}
              hideWindowCreateChat={hideWindowCreateChat}
            />
          </PopupLayout>
        ) : null}
      </div>

      {props.chatList.length ? (
        <ChatList
          user={props.user}
          deleteChat={props.deleteChat}
          selectChat={props.selectChat}
          searchChat={searchChat}
          chatList={props.chatList}
          selectedChat={props.selectedChat}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default MainMenu
