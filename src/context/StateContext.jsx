import { useReducer } from 'react'
import { UserContext } from '../context/UserContext'
import PropTypes from 'prop-types'
import ReducerContext from './ReducerContext'

const StateContext = ({ children }) => {
    //creamos un estado inicial de la app
    const initialState ={
        isAuthenticated: false,
        username: null,
    }

    //creamos un estado inicial en el reducer para controlar el estado de logeo de la app
    const [state, dispatch] = useReducer(ReducerContext, initialState)
  return (

    <UserContext.Provider value={{
        state,
        dispatch
    }}>
        {children}
    </UserContext.Provider>
  )
}

export default StateContext

StateContext.propTypes = {
    children: PropTypes.any
}