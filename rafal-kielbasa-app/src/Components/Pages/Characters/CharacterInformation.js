import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"
import axios from "axios"

const Container = styled.div`
  padding-top: 6%;
  width: 100%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function CharacterInformation() {
  const slug = useParams()
  const history = useHistory()
  const [data, takeData] = useState(null)
  useEffect(
    () =>
      axios
        .get(`https://rickandmortyapi.com/api/character/${slug.id}`)
        .then((response) => takeData(response)),
    []
  )
  if (!data) {
    return <div className="App">Brak danych z backendu</div>
  }
  console.log(data)
  return (
    <Container>
      <div>{`Name: ${data.data.name}`}</div>
      <div>{`Status:${data.data.status}`}</div>
      <div>{`Species:${data.data.species} `}</div>
      <div>{`Location: ${data.data.location.name}`}</div>
      <div>{`Origin: ${data.data.origin.name}`}</div>
      <button onClick={() => history.push("/characters")}>Back</button>
    </Container>
  )
}

export default CharacterInformation
