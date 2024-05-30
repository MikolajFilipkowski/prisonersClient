import { faCircleXmark, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Prisoner } from "../types"
import "./DetailsPage.css"
import { useState } from 'react'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function DetailsPage({prisonerInfo, setCurPage, setPrisonerInfo, errorHandler, refreshPrisoners} : {
  prisonerInfo:Prisoner,
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
  errorHandler:Function,
  refreshPrisoners:Function
}) {
  const [prisoner, setPrisoner] = useState(prisonerInfo)
  const [editable, setEditable] = useState(false)

  function backToInfo() {
    setCurPage("info")
  }

  function handleEdit() {
    setEditable(true)
  }

  function handleCancel() {
    setEditable(false)
    setPrisoner(prisonerInfo)
  }

  function handleAccept() {
    axios({
      method:"put",
      url:`http://localhost:8080/api/users/${prisoner.prisonerNumber}`,
      data:{
        name:prisoner.name,
        sentence:prisoner.sentence,
        cause:prisoner.cause
      }
    }).then(() => {
      setEditable(false)
      axios({
        method:"get",
        url:`http://localhost:8080/api/users/${prisoner.prisonerNumber}`
      }).then((v) => {
        const it = v.data[0]
        if (Object.hasOwn(it, "_id") && Object.hasOwn(it, "name") && Object.hasOwn(it, "sentence") && Object.hasOwn(it, "cause")) {
          setPrisonerInfo({prisonerNumber:it._id, name:it.name, sentence:it.sentence, cause:it.cause})
          refreshPrisoners()
        } else {
          throw Error("Dane są w złym formacie")
        }
      }, (err) => {
        errorHandler("Błąd ze strony serwera")
        console.error(err)
      })
    }, (err) => {
      errorHandler("Błędne dane")
      console.error(err)
    })
  }

  function handleDelete() {
    axios({
      method:"delete",
      url:`http://localhost:8080/api/users/${prisoner.prisonerNumber}`
    }).then(() => {
      refreshPrisoners()
      setCurPage("info")
    }, (err) => {
      errorHandler("Nie udało się usunąć")
      console.error(err)
    })
    
  }

  return (
    <div className='detailsPageContainer'>
      <div className='detailsBaseContainer'>
        <div className='exitIconContainer' onClick={backToInfo}>
          <FontAwesomeIcon icon={faCircleXmark} fontSize={36}/>
        </div>
        <h1>
          Dane więźnia
        </h1>
        <div className='dataContainer'>
          <span><strong>Imię i nazwisko: </strong> 
            <input 
              className='formInput' 
              value={prisoner.name}
              onChange={(e) => setPrisoner({...prisoner, name:e.target.value})}
              disabled={!editable}
              />
          </span>
          <span><strong>Długość wyroku: </strong>
            <input 
              className='formInput formNumberInput'
              type='number'
              value={prisoner.sentence}
              onChange={(e) => setPrisoner({...prisoner, sentence:parseInt(e.target.value)})}
              disabled={!editable}
              />
              <span> lata</span>
          </span>
          <span><strong>Wyrok: </strong> 
            <input 
              className='formInput' 
              value={prisoner.cause}
              onChange={(e) => setPrisoner({...prisoner, cause:e.target.value})}
              disabled={!editable}
              />
          </span>
        </div>
        { !editable && <button className="clearButton" onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare}/></button>}
        { editable && 
          <div>
            <button className="clearButton" onClick={handleCancel}><FontAwesomeIcon icon={faXmark} color='darkred'/></button>
            <button className="clearButton" onClick={handleAccept}><FontAwesomeIcon icon={faCheck} color='green'/></button>
          </div>
        }
        <button className="deleteButton" onClick={handleDelete}>Usuń więźnia</button>
      </div>
    </div>
  )
}