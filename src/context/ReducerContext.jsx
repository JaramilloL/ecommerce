const ReducerContext = (state, action) => {
  switch(action.type) {
    case 'login':
        return {
            ...state,
            isAuthenticated: true,
            username: action.payload
        }
    case 'logout':
        return {
            ...state,
            isAuthenticated: false,
            username: null
        }
  }
}

export default ReducerContext