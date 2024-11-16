import React, { useContext } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <span class="loading loading-spinner text-primary"></span>
  }

  if (user) {
    return children
  }

  return (
    <div>
      <Navigate to={"/login"}></Navigate>
    </div>
  )
}

export default PrivateRoute
