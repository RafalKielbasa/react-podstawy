import React from "react"
import { FormControl, InputLabel, Input, Button } from "@material-ui/core"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 90.3%;
  padding-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const StyledForm = styled.form`
  margin-top: 3%;
  width: 10%;
  display: flex;
  flex-direction: column;
`

function Registration() {
  const formObject = [
    { id: 1, inputName: "Name" },
    { id: 2, inputName: "Lastname" },
    { id: 3, inputName: "Email" },
    { id: 4, inputName: "Password" },
  ]

  return (
    <Container>
      <StyledForm>
        <h1>Registration</h1>
        {formObject.map((e) => {
          return (
            <FormControl key={e.id}>
              <InputLabel>{e.inputName}</InputLabel>
              <Input type="text" />
            </FormControl>
          )
        })}
        <Button type="submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </StyledForm>
    </Container>
  )
}
export default Registration
