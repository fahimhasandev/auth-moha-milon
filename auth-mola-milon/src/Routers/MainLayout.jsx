import { createBrowserRouter } from "react-router-dom"
import Root from "../layout/Root"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Orders from "../Pages/Orders"
import PrivateRoute from "./PrivateRoute"
import Profile from "../Pages/Profile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "order",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        )
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      }
    ]
  }
])

export default router
