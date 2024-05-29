import PrisonerBox from "../components/PrisonerBox"
import info from "./info.json"
import { v4 as uuidv4 } from 'uuid';
import "./InfoPage.css"
import { Prisoner } from "../types";

export default function InfoPage({setCurPage, setPrisonerInfo, errorHandler} : {
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
  errorHandler:Function
}) {
  function gotoAdd() {
    setCurPage("add")
  }

  return (
    <div className="infoPageContainer">
      <div className="infoBaseContainer">
        <div className='addIconContainer'>
          <button onClick={gotoAdd}>Dodaj więźnia</button>
        </div>
        <h1>Lista więźniów</h1>
        <div className="prisonerListContainer">
          {
            info.map((v) => {
              return <PrisonerBox 
                key={uuidv4()} 
                prisonerInfo={v} 
                setCurPage={setCurPage} 
                setPrisonerInfo={setPrisonerInfo}
                errorHandler={errorHandler}
              />
            })
          }
        </div>
      </div>
    </div>
  )
}