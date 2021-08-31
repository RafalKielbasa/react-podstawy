import React from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 99%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

function SuccessLogin() {
  return (
    <Container>
      <h1>Welcome!!!</h1>
    </Container>
  )
}

export default SuccessLogin
