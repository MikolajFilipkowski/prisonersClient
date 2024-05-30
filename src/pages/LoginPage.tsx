import { useState } from "react"
import "./LoginPage.css"
import logins from "./logins.json"

export default function LoginPage({setCurPage, errorHandler} : {
    setCurPage: React.Dispatch<React.SetStateAction<string>>,
    errorHandler: Function
}) {

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    function formHandler() {
        if (logins.find((v) => v.login===login && v.password===password)) {
            setCurPage("info")
        }
        else {
            errorHandler("Błędne dane logowania")
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