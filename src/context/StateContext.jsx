import { useEffect, useReducer, useState } from "react";
import { UserContext } from "../context/UserContext";
import PropTypes from "prop-types";
import ReducerContext from "./ReducerContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const StateContext = ({ children }) => {
  //creamos un estado inicial de la app
  const initialState = {
    isAuthenticated: false,
    username: null,
  };
  const [user, setUser] = useState('');

  //creamos una funcion para el registro mediante usuario y password

  const signIn = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const logOut = () => signOut(auth);

  //creamos el inicio de sesion de firebase
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const loginAccess = () => dispatch({ type: "login" });
  const loginNotAccess = () => dispatch({ type: "logout" });

  //creamos una funcion para el login de google
  const loginWithGoogle = ()=>{
    const loginPopu = new GoogleAuthProvider();
    return signInWithPopup(auth, loginPopu);
  }

  //creamos la funcion para un reseteo de contrasena mediante el correo
  const resetPassword = (email)=> sendPasswordResetEmail(auth, email);
  
  //creamos un effect en el cual muestre el estado de; usuario es decir visualiza el logeo
  useEffect(()=>{
    onAuthStateChanged(auth, (stateUser)=>{
      console.log(stateUser)
      setUser(stateUser);
    })
  },[])

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
        loginWithGoogle,
        resetPassword,
        user,
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
