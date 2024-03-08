import { useReducer } from "react";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import ReducerContext from "./ReducerContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const StateContext = ({ children }) => {
  //creamos un estado inicial de la app
  const initialState = {
    isAuthenticated: false,
    username: null,
  };

  //creamos una funcion para el registro mediante usuario y password

  const signIn = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);

  //creamos el inicio de sesion de firebase
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginAccess = () => dispatch({ type: "login" });
  const loginNotAccess = () => dispatch({ type: "logout" });

  //creamos un estado inicial en el reducer para controlar el estado de logeo de la app
  const [state, dispatch] = useReducer(ReducerContext, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        signIn,
        logOut,
        login,
        loginAccess,
        loginNotAccess,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default StateContext;

StateContext.propTypes = {
  children: PropTypes.any,
};
