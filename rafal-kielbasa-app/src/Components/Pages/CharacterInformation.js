import React from "react"
import styled from "styled-components"
import { useParams } from "react-router"
import { useHistory } from "react-router-dom"
import useFetch from "../../hooks/useFetch"

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
  const { response, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${slug.id}`
  )

  if (isLoading) {
    return <div className="App">Is loading...</div>
  }
  if (!response) {
    return <div className="App">Brak danych z backendu</div>
  }
  const data = response.data
  const charactersInfo = [
    { name: "Name:", data: data.name },
    { name: "Status:", data: data.status },
    { name: "Species:", data: data.species },
    { name: "Location:", data: data.location.name },
    { name: "Origin:", data: data.origin.name },
  ]

  return (
    <Container>
      {charactersInfo.map((e) => {
        return <div>{`${e.name} ${e.data}`}</div>
      })}
      <button onClick={() => history.push("/characters")}>Back</button>
    </Container>
  )
}

export default CharacterInformation
