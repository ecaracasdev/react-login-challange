import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../features/auth/authSlice"
import { Alert } from "./Alert"

export const Login = () => {
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState(null)

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      if (auth) {
        if ("admin@email.com" !== user.email || "123456" !== user.password)
          throw new Error("user or password invalid")

        dispatch(
          login({
              email: user.email,
              isLogged: true,
          })
        )
        navigate("/tasks")
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            {error && <Alert message={error} />}
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
