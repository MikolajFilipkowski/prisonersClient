import { Prisoner } from "../types"
import "./PrisonerBox.css"

export default function PrisonerBox({prisonerInfo, setCurPage, setPrisonerInfo, errorHandler} : {
    prisonerInfo:Prisoner,
    setCurPage: React.Dispatch<React.SetStateAction<string>>,
    setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
    errorHandler:Function
}) {

    function clickHandler() {
        if (!(prisonerInfo.prisonerNumber && (typeof prisonerInfo.sentence=="number") && prisonerInfo.name && prisonerInfo.cause)) {
            errorHandler("Niepoprawne dane więźnia")
            console.log(prisonerInfo)
        } else {
            setPrisonerInfo(prisonerInfo)
            setCurPage("details")
        }
    }

    return (
        <div className="prisonerContainer" onClick={clickHandler}>
            <img src="./prisoner.png" width={50}/>
            <span>{prisonerInfo.name}</span>
        </div>
    )
}