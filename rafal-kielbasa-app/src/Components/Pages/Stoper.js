import React, { useState, useEffect } from "react"
import styled from "styled-components"

const Background = styled.div`
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
`
function Stoper({ start = 0, increment = 1 }) {
  const [time, setTime] = useState(start)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    let interval = null
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + increment)
      }, 500)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timerOn])

  return (
    <Background>
      <Outcome>{time}</Outcome>
      <div>
        <button onClick={() => setTimerOn(true)}>Start</button>
        <button onClick={() => setTimerOn(false)}>Stop</button>
        <button
          onClick={() => {
            setTime(0)
            setTimerOn(false)
          }}
        >
          Reset
        </button>
      </div>
    </Background>
  )
}
export default Stoper
