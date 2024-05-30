import PrisonerBox from "../components/PrisonerBox"
import "./InfoPage.css"
import { Prisoner } from "../types";

export default function InfoPage({setCurPage, setPrisonerInfo, prisonerArray, errorHandler} : {
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
  prisonerArray: Array<Prisoner>
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
            prisonerArray.map((v) => {
              return <PrisonerBox 
                key={v.prisonerNumber} 
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