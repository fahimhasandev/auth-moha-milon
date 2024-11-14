import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"

const Register = () => {
  const { createUser } = useContext(AuthContext)

  const handleRegister = e => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(name, email, password)

    // create user
    createUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.log(error.message))
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="name" placeholder="name" className="input input-bordered" required name="name" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required name="email" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required name="password" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          <p className="ml-4 mb-4">
            New to website? Please{" "}
            <Link to="/login">
              <span className="font-bold underline"> Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register
