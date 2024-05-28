import { useState } from "react"
import "./LoginPage.css"

export default function LoginPage({setCurPage, errorHandler} : {
    setCurPage: React.Dispatch<React.SetStateAction<string>>,
    errorHandler: VoidFunction
}) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function formHandler() {
        if (login==="admin" && password==="qwerty") {
            setCurPage("info")
        }
        else {
            errorHandler()
        }
    }

  return (
    <div className="loginPageContainer">
        <div className="loginBaseContainer">
            <div className="loginFormContainer">
                <h1>CaptiveCare</h1>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Hasło"/>
                <button onClick={formHandler}>Zaloguj się</button>
            </div>
        </div>
    </div>
    
  )
}