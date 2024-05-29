import { Prisoner } from "../types"
import "./PrisonerBox.css"

export default function PrisonerBox({prisonerInfo, setCurPage, setPrisonerInfo} : {
    prisonerInfo:Prisoner,
    setCurPage: React.Dispatch<React.SetStateAction<string>>,
    setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>
}) {

    function clickHandler() {
        setPrisonerInfo(prisonerInfo)
        setCurPage("details")
    }

    return (
        <div className="prisonerContainer" onClick={clickHandler}>
            <img src="./prisoner.png" width={50}/>
            <span>{prisonerInfo.name} {prisonerInfo.lastname}</span>
        </div>
    )
}