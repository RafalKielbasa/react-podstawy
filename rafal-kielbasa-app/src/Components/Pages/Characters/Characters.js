import React from "react"
import styled from "styled-components"
import CreateList from "./CreateList"

const Container = styled.div`
  width: 99%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Characters({ data, page, funct, status, statusFun }) {
  return (
    <Container>
      <div>Characters</div>
      <div>{`Page ${page} from ${data.data.info.pages}`}</div>
      <button onClick={() => funct(page + 1)}>Next</button>
      <button onClick={() => funct(page - 1)}>Previous</button>
      <select value={status} onChange={(e) => statusFun(e.target.value)}>
        <option value="">All</option>
        <option value="dead">Dead</option>
        <option value="alive">Alive</option>
        <option value="unknown">Unknown</option>
      </select>
      <CreateList data={data}></CreateList>
    </Container>
  )
}
export default Characters
