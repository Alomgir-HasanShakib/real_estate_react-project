import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);
// social media login
const googleprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();

const Authentication = ({ children }) => {
  const auth = getAuth(app);
  const [loader, setLoader] = useState(true);
  // manage user
  const [user, setUser] = useState(null);
  console.log(user);

  // create user
  const createUser = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // login user
  const loginUser = (email, pass) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleprovider);
  };
  const gitLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, githubprovider);
  };
  // sign Out user

  const logOut = () => {
    setUser(null);
    setLoader(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    loader,
    loginUser,
    user,
    logOut,
    googleLogin,
    gitLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authentication;
