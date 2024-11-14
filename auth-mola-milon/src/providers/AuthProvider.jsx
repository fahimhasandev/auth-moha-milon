import React, { createContext } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import auth from "../firebase.init"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    name,
    createUser,
    signInUser
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
