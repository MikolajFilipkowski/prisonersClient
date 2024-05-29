import PrisonerBox from "../components/PrisonerBox"
import info from "./info.json"
import { v4 as uuidv4 } from 'uuid';
import "./InfoPage.css"
import { Prisoner } from "../types";

export default function InfoPage({setCurPage, setPrisonerInfo} : {
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>
}) {
  return (
    <div className="infoPageContainer">
      <div className="infoBaseContainer">
        <h1>Lista więźniów</h1>
        <div className="prisonerListContainer">
          {
            info.map((v) => {return <PrisonerBox key={uuidv4()} prisonerInfo={v} setCurPage={setCurPage} setPrisonerInfo={setPrisonerInfo}/>})
          }
        </div>
      </div>
    </div>
  )
}