import axios from "axios"
import { useEffect, useState } from "react"
import CreateList from "./Components/CreateList"
import "./App.css"
import Navigation from "./Components/Navigaton"
import styled from "styled-components"

function App() {
  const [data, takeData] = useState(null)
  const [page, changePage] = useState(1)
  useEffect(
    () =>
      axios
        .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then((response) => takeData(response)),
    [page]
  )

  if (!data) {
    return <div className="App">Brak danych z backendu</div>
  }
  if (page < 1) {
    changePage(page + 1)
  }
  if (page > 34) {
    return changePage(page - 1)
  }
  console.log(data)
  return (
    <div className="App">
      <Navigation data={data} page={page} function1={changePage} />
      <CreateList data={data} />
    </div>
  )
}
export default App
