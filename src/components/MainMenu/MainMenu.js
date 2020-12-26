import React from 'react'
import PopupLayout from '../../hoc/PopupLayout/PopupLayout'
import Loader from '../Loader/Loader'
import RoomList from '../MainMenu/RoomList/RoomList'
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
      <input
        className={classes.MainMenu__input}
        value={searchChat}
        onChange={changeSearchChat}
      />
      <div className={classes.newChat}>
        <button
          className={classes.newChat__create}
          onClick={() => {
            setFormCreateChat(true)
          }}>
          Создать чат
        </button>{' '}
        {formCreateChat ? (
          <PopupLayout>
            <CreateChat
              createChat={props.createChat}
              hideWindowCreateChat={hideWindowCreateChat}
            />
          </PopupLayout>
        ) : null}
      </div>
      {props.roomList.length ? (
        <RoomList
          searchChat={searchChat}
          roomList={props.roomList}
          selectedRoom={props.selectedRoom}
        />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default MainMenu
