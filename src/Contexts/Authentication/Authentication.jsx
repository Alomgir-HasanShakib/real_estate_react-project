import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { createContext } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const Authentication = ({children}) => {

  const auth = getAuth(app);

  const createUser = (email, pass) => {
   return createUserWithEmailAndPassword(auth, email, pass);
  };
  const loginUser = (email,pass)=>{
    return signInWithEmailAndPassword(auth, email,pass)
  }

  const authInfo = {
    createUser
  }
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default Authentication;
