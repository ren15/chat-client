import React from 'react'
import Loader from '../Loader/Loader'
import RoomList from '../MainMenu/RoomList/RoomList'
import classes from './MainMenu.module.scss'

function MainMenu(props) {
  const [newChat, setNewChat] = React.useState('')
  const [searchChat, setSearchChat] = React.useState('')

  const user = {
    id: '1',
    name: 'Ilham'
  }

  const changeSearchChat = (event) => {
    return setSearchChat(event.target.value)
  }

  return (
    <div className={classes.MainMenu}>
      <div className={classes.MainMenu__user}>
        <p className={classes.MainMenu__name}>{user.name}</p>
        <button className={classes.MainMenu__logout}></button>
      </div>
      <input
        className={classes.MainMenu__input}
        value={searchChat}
        onChange={changeSearchChat}
      />
      <div className={classes.newChat}>
        <button className={classes.newChat__create}>Создать чат</button>
        <div className={classes.newChat__chatName}>
          <input
            className={classes.newChat__input}
            onChange={(event) => setNewChat(event.target.value)}
          />
          <button
            className={classes.newChat__submit}
            onClick={() => props.createChat(newChat)}></button>
        </div>
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
