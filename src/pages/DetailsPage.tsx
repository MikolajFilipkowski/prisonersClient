import { faCircleXmark, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Prisoner } from "../types"
import "./DetailsPage.css"
import { useState } from 'react'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function DetailsPage({prisonerInfo, setCurPage, setPrisonerInfo} : {
  prisonerInfo:Prisoner,
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
}) {
  const [prisoner, setPrisoner] = useState(prisonerInfo)
  const [editable, setEditable] = useState(false)

  function backToInfo() {
    setCurPage("info")
  }

  function handleEdit() {
    setEditable(true)
    if (editable) {
      console.log(prisoner)
    }
  }

  function handleCancel() {
    setEditable(false)
    setPrisoner(prisonerInfo)
  }

  function handleAccept() {
    setEditable(false)
  }

  function handleDelete() {
    setCurPage("info")
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