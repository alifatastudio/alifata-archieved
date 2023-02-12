import { createContext, useContext, useEffect, useState } from "react";
import {
 onAuthStateChanged,
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 signInWithPopup,
 GoogleAuthProvider,
} from "firebase/auth";
import { FireAuth } from "@library/firebase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = (props) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const unsubscribe = onAuthStateChanged(FireAuth, (user) => {
   if (user) {
    setUser({
     uid: user.uid,
     email: user.email,
     displayName: user.displayName,
     photoURL: user.photoURL,
    });
   } else {
    setUser(null);
   }

   setLoading(false);
  });

  return () => unsubscribe()
 }, []);

 const singup = (email, password) => {
  return createUserWithEmailAndPassword(FireAuth, email, password);
 }

 const login = (email, password) => {
  return signInWithEmailAndPassword(FireAuth, email, password);
 }

 const logout = async () => {
  setUser(null);
  await signOut(FireAuth);
 }

 const googleAuth = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(FireAuth, provider);
 }

 return (
  <AuthContext.Provider value={{ user, login, singup, logout, googleAuth}}>
   {loading ? null : props.children}
  </AuthContext.Provider>
 )
}