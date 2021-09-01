import React from "react"
import styled from "styled-components"
import { Switch } from "@material-ui/core"

import CreateList from "../SupportComponents/CreateList"

const Container = styled.div`
  width: 99%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledH1 = styled.h1`
  color: #0c2934;
  font-family: "Pacifico", cursive;
`
const StyledH2 = styled.div`
  color: #0c2934;
  font-family: "Pacifico", cursive;
  font-size: 20px;
  margin-bottom: 10px;
`
const StyledButton = styled.button`
  background-color: #0c2934;
  color: white;
  padding: 5px;
  margin: 5px;
  width: 70px;
`

function Characters({
  data,
  page,
  funct,
  status,
  statusFun,
  switchState,
  switchFunction,
}) {
  const statusOptions = [
    { value: "", tag: "ALL" },
    { value: "dead", tag: "Dead" },
    { value: "alive", tag: "Alive" },
    { value: "unknown", tag: "Unknown" },
  ]

  const handleChange = (event) => {
    switchFunction(event.target.checked)
  }
  return (
    <Container>
      <StyledH1>Characters</StyledH1>
      <StyledH2>{`Page ${page} from ${data.data.info.pages}`}</StyledH2>
      <div>
        <StyledButton onClick={() => funct(page + 1)}>Next</StyledButton>
        <StyledButton onClick={() => funct(page - 1)}>Previous</StyledButton>
      </div>
      <select value={status} onChange={(e) => statusFun(e.target.value)}>
        {statusOptions.map((e) => {
          return <option value={e.value}>{e.tag}</option>
        })}
      </select>
      <Switch checked={switchState} onChange={handleChange} />
      <CreateList data={data}></CreateList>
    </Container>
  )
}
export default Characters
