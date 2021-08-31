const userDataState = [
  {
    name: "Rafal",
    last_name: "Kielbasa",
    email: "bobiKenobi@test.pl",
    password: "123456",
  },
]

const userDataReducer = (state = userDataState, action) => {
  switch (action.type) {
    case "ADD/USERDATA":
      return [...state, action.payload]
    default:
      return state
  }
}

export default userDataReducer
