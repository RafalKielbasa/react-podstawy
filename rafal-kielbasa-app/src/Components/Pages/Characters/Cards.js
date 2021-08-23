import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const Card = styled(Link)`
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
function CreateCard({ name, species, status, image, id }) {
  return (
    <>
      <Card key={id} to={`characters/${id}`}>
        <img src={image} alt={name} />
        <Data>
          <div>Name: {name}</div>
          <div>Species: {species}</div>
          <div>Status: {status}</div>
        </Data>
      </Card>
    </>
  )
}

export default CreateCard
