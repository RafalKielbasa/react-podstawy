import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../State/index"
import styled from "styled-components"

const Container = styled.div`
  padding-top: 6%;
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Outcome = styled.div`
  font-size: xx-large;
  font-weight: 800;
  color: ${({ number }) =>
    number % 5 === 0 && number !== 0 ? "green" : "black"};
`
const StyledButton = styled.button`
  background-color: #0c2934;
  color: white;
  padding: 5px;
  margin: 5px;
  width: 70px;
`
function Counter() {
  const counterState = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  const { addDigit, subtractDigit, clearDigit } = bindActionCreators(
    actionCreators,
    dispatch
  )
  return (
    <Container>
      <Outcome number={counterState}> {counterState}</Outcome>
      <div>
        <StyledButton onClick={() => addDigit(1)}>Add</StyledButton>
        <StyledButton onClick={() => clearDigit(0)}>Clear</StyledButton>
        <StyledButton onClick={() => subtractDigit(1)}>Subtract</StyledButton>
      </div>
    </Container>
  )
}
export default Counter
