import React from "react"
import CreateCard from "./CreateCard"
import styled from "styled-components"

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`

function CreateList({ data }) {
  return (
    <List>
      {data.data.results.map((element) => {
        return CreateCard(element)
      })}
    </List>
  )
}

export default CreateList
