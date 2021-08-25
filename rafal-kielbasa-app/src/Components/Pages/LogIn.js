import React from "react"
import { useSelector, useDispatch } from "react-redux"
import FormComponent from "../SupportComponents/FormComponent"

function LogIn() {
  const userDataState = useSelector((state) => state.userData)

  const loginArray = [
    { id: 1, inputName: "Email" },
    { id: 2, inputName: "Password" },
  ]
  const onSubmit = (data) => {
    if (
      userDataState
        .map((e) => e.email === data.email && e.password === data.password)
        .some((e) => e === true) === true
    ) {
      return alert("This email is already used!")
    } else {
    }
  }

  return (
    <FormComponent
      name={"Log in"}
      formArray={loginArray}
      submitFunction={onSubmit}
    />
  )
}
export default LogIn
