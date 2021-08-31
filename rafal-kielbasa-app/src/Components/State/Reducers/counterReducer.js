const counterState = 0

const counterReducer = (state = counterState, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload
    case "subtract":
      return state - action.payload
    case "clear":
      return (state = action.payload)
    default:
      return state
  }
}
export default counterReducer
