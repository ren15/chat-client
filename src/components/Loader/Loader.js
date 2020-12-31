import React from 'react'
import './Loader.css'

function Loader() {
  const [loadTime, setLoadTime] = React.useState(false)

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setLoadTime(true)
    }, 5000)
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return (
    <div className='bodyLoader'>
      {loadTime ? (
        <h2>Чаты не найдены</h2>
      ) : (
        <div className='loader'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  )
}

export default Loader
