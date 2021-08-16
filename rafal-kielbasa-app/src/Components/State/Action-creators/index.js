export const addDigit = (digit) => {
  return (dispatch) => {
    dispatch({
      type: "add",
      payload: digit,
    })
  }
}

export const subtractDigit = (digit) => {
  return (dispatch) => {
    dispatch({
      type: "subtract",
      payload: digit,
    })
  }
}

export const clearDigit = (digit) => {
  return (dispatch) => {
    dispatch({
      type: "clear",
      payload: digit,
    })
  }
}