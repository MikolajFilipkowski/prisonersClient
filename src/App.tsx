import { useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import InfoPage from './pages/InfoPage'
import DetailsPage from './pages/DetailsPage'
import info from "./pages/info.json"

function App() {
  const [curPage, setCurPage] = useState("info")

  const [prisonerInfo, setPrisonerInfo] = useState(info[0])

  const [error, setError] = useState("")

  function errorHandler(error:string) {
    setError(error)
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
        <InfoPage setCurPage={setCurPage} setPrisonerInfo={setPrisonerInfo} errorHandler={errorHandler}/>
      }
      { curPage==="details" &&
        <DetailsPage setCurPage={setCurPage} prisonerInfo={prisonerInfo} setPrisonerInfo={setPrisonerInfo}/>
      }
    </div>
  )
}

export default App
