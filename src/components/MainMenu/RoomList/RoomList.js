import React from 'react'
import Room from '../Room/Room'
import classes from '../RoomList/RoomList.module.scss'

function RoomList(props) {
  const strRegex = new RegExp(props.searchChat, 'i')

  return (
    <ul className={classes.roomList}>
      {props.roomList
        .filter((room) => strRegex.test(room.name))
        .map((room, index) => {
          return (
            <Room key={index} room={room} selectedRoom={props.selectedRoom} />
          )
        })}
    </ul>
  )
}

export default RoomList