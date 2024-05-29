import { Prisoner } from "../types"
import "./PrisonerBox.css"

export default function PrisonerBox({prisonerInfo, setCurPage, setPrisonerInfo, errorHandler} : {
    prisonerInfo:Prisoner,
    setCurPage: React.Dispatch<React.SetStateAction<string>>,
    setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
    errorHandler:Function
}) {

    function clickHandler() {
        if (!(prisonerInfo.prisonerNumber && prisonerInfo.sentence && prisonerInfo.name && prisonerInfo.lastname && prisonerInfo.cause)) {
            errorHandler("Niepoprawne dane więźnia")
        } else {
            setPrisonerInfo(prisonerInfo)
            setCurPage("details")
        }
    }

    return (
        <div className="prisonerContainer" onClick={clickHandler}>
            <img src="./prisoner.png" width={50}/>
            <span>{prisonerInfo.name} {prisonerInfo.lastname}</span>
        </div>
    )
}