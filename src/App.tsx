import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import InfoPage from './pages/InfoPage'
import DetailsPage from './pages/DetailsPage'

function App() {
  const [curPage, setCurPage] = useState("login")

  const [error, setError] = useState("")

  function errorHandler() {
    setError("Błędne dane logowania")
  }

  return (
    <div className='appContainer'>
      { error &&
        <div className='errorContainer'>
          <div className='errorMessageContainer'>
            <span>{error}</span>
          </div>
          <button onClick={() => setError("")}>X</button>
        </div>
      }
      
      { curPage==="login" &&
        <LoginPage setCurPage={setCurPage} errorHandler={errorHandler}/>
      }
      { curPage==="info" &&
        <InfoPage/>
      }
      { curPage==="details" &&
        <DetailsPage/>
      }
    </div>
  )
}

export default App
