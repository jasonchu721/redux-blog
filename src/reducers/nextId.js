const nextId = (state = 0, action) => {
  switch (action.tpe) {
    case 'INC_ID':
      return state + 1;
    default:
      return state
  }
}

export default nextId;