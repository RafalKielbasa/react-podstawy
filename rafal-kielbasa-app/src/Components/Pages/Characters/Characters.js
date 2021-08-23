import React, { useState } from "react"
import styled from "styled-components"
import { Switch } from "@material-ui/core"

import CreateList from "./CreateList"

const Container = styled.div`
  width: 99%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <div>Characters</div>
      <div>{`Page ${page} from ${data.data.info.pages}`}</div>
      <button onClick={() => funct(page + 1)}>Next</button>
      <button onClick={() => funct(page - 1)}>Previous</button>
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
