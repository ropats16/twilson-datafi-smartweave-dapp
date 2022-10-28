// just a functions object
const functions = { visit }

// a handler function
export function handle(state, action) {
  // takes in function object defined above
  if (Object.keys(functions).includes(action.input.function)) {
    // returns function
    return functions[action.input.function](state, action)
  }
  return ContractError('function not defined!')
}

// function that is passed to object above
function visit(state, action) {
  state.count = state.count + 1;
  return { state }
}