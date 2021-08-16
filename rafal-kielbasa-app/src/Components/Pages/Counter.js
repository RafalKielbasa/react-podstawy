import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../State/index"
import styled from "styled-components"

const Container = styled.div`
  padding-top: 6%;
  width: 100%;
  height: 89vh;
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
        <button onClick={() => addDigit(1)}>Add</button>
        <button onClick={() => clearDigit(0)}>Clear</button>
        <button onClick={() => subtractDigit(1)}>Subtract</button>
      </div>
    </Container>
  )
}
export default Counter
