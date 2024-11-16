import React, { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase.init"
import { GoogleAuthProvider } from "firebase/auth"

export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log("Current User", currentUser)
      setUser(currentUser)
      setLoading(false)
    })

    // clean up-unmount
    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    singInWithGoogle
  }

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}

export default AuthProvider

/**
 *
 * 1. create context with null default value
 * 2. create provider
 * 3. set a  value with authInfo
 * 4. [ attention please !!!]
 * 5. use the authProvider in the main context
 * 6. Access the children inside the authProvider in the main.jsx
 * 7. export authContext
 */
