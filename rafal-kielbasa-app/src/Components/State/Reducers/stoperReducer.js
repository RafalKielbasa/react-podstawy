const stoperState = {
  iteration: 10,
}

const stoperReducer = (state = stoperState, action) => {
  switch (action.type) {
    case "SET/ITERATION":
      return (state.iteration = action.payload)

    default:
      return state
  }
}
export default stoperReducer
