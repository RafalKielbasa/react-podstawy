import React from "react"
import FormComponent from "../SupportComponents/FormComponent"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../State"

function Registration() {
  const userDataState = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  const { sendData } = bindActionCreators(actionCreators, dispatch)

  const registrationArray = [
    { id: 1, inputName: "Name" },
    { id: 2, inputName: "Last_name" },
    { id: 3, inputName: "Email" },
    { id: 4, inputName: "Password" },
  ]

  const onSubmit = (data) => {
    if (
      userDataState
        .map((e) => e.email === data.email)
        .some((e) => e === true) === true
    ) {
      return alert("This email is already used!")
    } else {
      return [sendData(data), alert(`Welcome ${data.name}`)]
    }
  }

  return (
    <FormComponent
      name={"Registration"}
      formArray={registrationArray}
      submitFunction={onSubmit}
    />
  )
}
export default Registration
