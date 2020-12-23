import Chat from './components/Chat/Chat'
import './null.css'
import classes from './App.module.scss'
import MainMenu from './components/MainMenu/MainMenu'

function App() {
  return (
    <div className={classes.App}>
      <MainMenu />
      <Chat />
    </div>
  )
}

export default App
