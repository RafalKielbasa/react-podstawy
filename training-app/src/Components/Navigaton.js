import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`

function Navigation({ data, page, function1 }) {
  function handlePageChange(e) {
    function1(e.target.value)
  }

  return (
    <div>
      <Title>{data.data.info.count} Characters from Rick and Morty</Title>
      <h3>
        Page {page} of {data.data.info.pages}
      </h3>
      <button onClick={() => function1(page - 1)}>Previous Page</button>
      <button onClick={() => function1(page + 1)}>Next Page</button>
      <form>
        <label>Which page</label>
        <input type="text" onChange={handlePageChange}></input>
      </form>
    </div>
  )
}

export default Navigation
