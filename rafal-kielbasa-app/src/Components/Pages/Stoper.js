import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Input, InputLabel, FormControl, Button } from "@material-ui/core"
import { set, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../State"
const Background = styled.div`
  padding-top: 6%;
  width: 98%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Outcome = styled.div`
  font-size: xx-large;
  font-weight: 800;
`
const StyledButton = styled.button`
  background-color: #0c2934;
  color: white;
  padding: 5px;
  margin: 5px;
  width: 70px;
`

const UserInterface = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function Stoper({ start = 0 }) {
  const stoperState = useSelector((state) => state.stoper)
  const dispatch = useDispatch()
  const { setIteration } = bindActionCreators(actionCreators, dispatch)
  const iteration = parseInt(stoperState.iteration)
  console.log(iteration)
  const [time, setTime] = useState(start)
  const [timerOn, setTimerOn] = useState(false)
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    let interval = null
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + iteration)
      }, 500)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  const iterationFunction = (data) => {
    if (data.iteration === "" && data.iteration != parseInt(data.iteration)) {
      alert("Set intiger")
    } else {
      setIteration(data)
    }
  }
  return (
    <Background>
      <Outcome>{time}</Outcome>
      <UserInterface>
        <div>
          <StyledButton onClick={() => setTimerOn(true)}>Start</StyledButton>
          <StyledButton onClick={() => setTimerOn(false)}>Stop</StyledButton>
          <StyledButton
            onClick={() => {
              setTime(start)
              setTimerOn(false)
            }}
          >
            Reset
          </StyledButton>
        </div>
        <form onSubmit={handleSubmit(iterationFunction)}>
          <FormControl>
            <InputLabel>Set iteration</InputLabel>
            <Input type="textfield" {...register("iteration")} />
          </FormControl>
          <Button type="submit" color="primary">
            Set
          </Button>
        </form>
      </UserInterface>
    </Background>
  )
}
export default Stoper
