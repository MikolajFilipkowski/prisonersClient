import { useEffect, useState } from 'react'
import './App.css'
import LoginPage from './pages/LoginPage'
import InfoPage from './pages/InfoPage'
import DetailsPage from './pages/DetailsPage'
import info from "./pages/info.json"
import AddPage from './pages/AddPage'
import { Prisoner } from './types'
import axios from 'axios'

function App() {
  const [curPage, setCurPage] = useState("login")

  const [prisonerArray, setPrisonerArray] = useState<Array<Prisoner>>(new Array<Prisoner>)

  const [prisonerInfo, setPrisonerInfo] = useState(info[0])

  const [error, setError] = useState("")

  function errorHandler(error:string) {
    setError(error)
  }

  async function refreshPrisoners() {
    try {
      const prisonersRes = await axios({
        method:"get",
        url:"http://localhost:8080/api/users"
      })

      const prisoners = prisonersRes.data

      console.log(prisoners)

      if (!Array.isArray(prisoners)) {
        throw Error("Response is not an array")
      } else {
        if (!prisoners.every(it => {
          return Object.hasOwn(it, "_id") && Object.hasOwn(it, "name") && Object.hasOwn(it, "sentence") && Object.hasOwn(it, "cause")
        })) {
          throw Error("Response does not contain correct data")
        }
      }
      const prisonersAsType:Array<Prisoner> = prisoners.map((v) => { 
        return {prisonerNumber:v._id, name:v.name, sentence:v.sentence, cause:v.cause}
      })
      setPrisonerArray(prisonersAsType)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const refresh = async () => {
      await refreshPrisoners()
    }
    refresh()
  }, [])

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
        <InfoPage prisonerArray={prisonerArray} setCurPage={setCurPage} setPrisonerInfo={setPrisonerInfo} errorHandler={errorHandler}/>
      }
      { curPage==="details" &&
        <DetailsPage setCurPage={setCurPage} prisonerInfo={prisonerInfo} setPrisonerInfo={setPrisonerInfo} errorHandler={errorHandler}/>
      }
      { curPage==="add" &&
        <AddPage setCurPage={setCurPage} errorHandler={errorHandler} refreshPrisoners={refreshPrisoners}/>
      }
    </div>
  )
}

export default App
