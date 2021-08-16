import React from "react"
import styled from "styled-components"

const Card = styled.div`
  font-size: larger;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`
const Data = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  width: 300px;
`
function CreateCard({ name, species, status, image, location }) {
  return (
    <Card>
      <img src={image} alt={name} />
      <Data>
        <div>Name: {name}</div>
        <div>Species: {species}</div>
        <div>Status: {status}</div>
        <div>Location: {location.name}</div>
      </Data>
    </Card>
  )
}

export default CreateCard
