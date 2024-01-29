import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase.config"
import { auth } from "../../firebase.config";
import {GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)
  // const [user,setUser] = useState();

  const provider = new GoogleAuthProvider();

  function signupWithEP(email, password) {
    return createUserWithEmailAndPassword(auth,email,password);
  }

  function loginWithEP(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signInWithGoogle = async() =>{
    return signInWithPopup(auth, provider)
    };

  function logout() {
    return auth.signOut();
  }

  function updateUserData(data){
    setUserData(data)
  }

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      async function getUserData(email){
        if (!email) return null;
        const responsedata = await fetch(`http://localhost:3001/users/${email}`,{method: "GET",});
        const userData = await responsedata.json();
        return userData[0];
      }
      const udata = getUserData(user?.email);
      setUserData(udata)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loginWithEP,
    signupWithEP,
    signInWithGoogle,
    logout,
    userData,
    setUserData,
    updateUserData
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}