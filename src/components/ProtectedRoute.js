import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ children, redirectTo = "/" }) => {
  const user = useSelector((state) => state.auth)
  if (!user || !user.isLogged) {
    return <Navigate to={redirectTo} />
  }

  return children ? children : <Outlet />
}
