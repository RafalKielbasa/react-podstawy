import { useState } from "react"
import "./App.css"
import MyName from "./Components/MyName"

function App() {
  const [title, SetTitle] = useState("Moja pierwsza stronka")
  return (
    <div className="App">
      <h1>{title}</h1>
      <MyName />
    </div>
  )
}

export default App
