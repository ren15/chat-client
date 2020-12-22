import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'
import RoomList from './components/RoomList/RoomList'

function App() {
  return (
    <div className={classes.App}>
      <RoomList />
      <Chat />
    </div>
  )
}

export default App
