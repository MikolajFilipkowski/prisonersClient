import { Prisoner } from "../types"
import "./DetailsPage.css"

export default function DetailsPage({prisonerInfo, setCurPage, setPrisonerInfo} : {
  prisonerInfo:Prisoner,
  setCurPage: React.Dispatch<React.SetStateAction<string>>,
  setPrisonerInfo: React.Dispatch<React.SetStateAction<Prisoner>>,
}) {
  return (
    <div>{prisonerInfo.name}</div>
  )
}