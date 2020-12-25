import React from 'react'
import classes from './PopupLayout.module.scss'

function PopupLayout(props) {
  return (
    <div className={classes.container}>
      <div className={classes.PopupLayout}>{props.children}</div>
    </div>
  )
}

export default PopupLayout
