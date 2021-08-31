import React from "react"
import { useSelector } from "react-redux"
import FormComponent from "../SupportComponents/FormComponent"
import { useHistory } from "react-router-dom"

function LogIn() {
  const userDataState = useSelector((state) => state.userData)

  const loginArray = [
    { id: 1, inputName: "Email" },
    { id: 2, inputName: "Password" },
  ]
  const history = useHistory()

  function changePage() {
    history.push("/success-login")
  }
  const onSubmit = (data) => {
    if (
      userDataState
        .map((e) => e.email === data.email && e.password === data.password)
        .some((e) => e === true) === true
    ) {
      return changePage()
    } else {
      alert("Invalid password or email")
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
