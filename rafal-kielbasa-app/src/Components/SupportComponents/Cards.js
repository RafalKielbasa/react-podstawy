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
  text-decoration: none;
`
const Data = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  width: 300px;
  text-decoration: none;
`
const StyledH2 = styled.div`
  color: #0c2934;
  font-family: "Pacifico", cursive;
  font-size: 20px;
`
function CreateCard({ name, species, status, image, id }) {
  return (
    <>
      <Card key={id} to={`characters/${id}`}>
        <img src={image} alt={name} />
        <Data>
          <StyledH2>Name: {name}</StyledH2>
          <StyledH2>Species: {species}</StyledH2>
          <StyledH2>Status: {status}</StyledH2>
        </Data>
      </Card>
    </>
  )
}

export default CreateCard
