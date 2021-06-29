import React from "react"
import MyButtons from "./MyButtons"
function MyName({ myName = "Rafał" }) {
  return (
    <>
      <h1>{myName}</h1>
      <button>Zmien tytuł</button>
      <MyButtons />
    </>
  )
}
export default MyName
