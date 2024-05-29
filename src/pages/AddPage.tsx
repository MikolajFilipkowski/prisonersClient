import "./AddPage.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"

export default function AddPage({setCurPage, errorHandler} : {
    setCurPage:React.Dispatch<React.SetStateAction<string>>,
    errorHandler:Function
}) {

    const [newPrisoner, setNewPrisoner] = useState({name:"", sentance:0, cause:""})

    function backToInfo() {
        setCurPage("info")
    }

    function handleAdd() {
        setCurPage("info")
    }

    return (
        <div className='addPageContainer'>
          <div className='addBaseContainer'>
            <div className='exitIconContainer' onClick={backToInfo}>
              <FontAwesomeIcon icon={faCircleXmark} fontSize={36}/>
            </div>
            <h1>Dodaj więźnia</h1>
            <div className="addFormContainer">
                <label>
                    <span><strong>Imię i nazwisko: </strong></span>
                    <input 
                        className="addInput"
                        value={newPrisoner.name}
                        onChange={(e) => setNewPrisoner({...newPrisoner, name:e.target.value})}
                        />
                </label>
                <label>
                    <span><strong>Długość wyroku: </strong></span>
                    <input 
                        className="addInput addNumberInput"
                        type="number"
                        value={newPrisoner.sentance}
                        onChange={(e) => setNewPrisoner({...newPrisoner, sentance:parseInt(e.target.value)})}
                        />
                </label>
                <label>
                    <span><strong>Wyrok: </strong></span>
                    <input 
                        className="addInput"
                        value={newPrisoner.cause}
                        onChange={(e) => setNewPrisoner({...newPrisoner, cause:e.target.value})}
                        />
                </label>
                <button className="addButton" onClick={handleAdd}>Dodaj</button>
            </div>
            
          </div>
        </div>
    )
}
