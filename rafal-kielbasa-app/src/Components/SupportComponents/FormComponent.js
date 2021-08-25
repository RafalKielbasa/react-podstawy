import React from "react"
import styled from "styled-components"
import { FormControl, InputLabel, Input, Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
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
  align-items: center;
`

function FormComponent({ name, formArray, submitFunction }) {
  const { register, handleSubmit } = useForm()

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit(submitFunction)}>
        <h1>{name}</h1>
        {formArray.map((e) => {
          return (
            <FormControl key={e.id}>
              <InputLabel>{e.inputName}</InputLabel>
              <Input
                type={e.inputName.toLocaleLowerCase()}
                {...register(e.inputName.toLocaleLowerCase())}
              />
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

export default FormComponent
