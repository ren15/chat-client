import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.App}>
      <Chat />
    </div>
  )
}

export default App
