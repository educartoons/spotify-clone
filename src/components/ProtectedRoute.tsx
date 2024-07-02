import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../context/user-context'
import Spinner from './Spinner'

export default function ProtectedRoute() {
  const { isAuthenticated, hasLoaded } = useUserContext()

  if (hasLoaded === false) return <Spinner />

  if (isAuthenticated) {
    return <Outlet />
  }

  return <Navigate to="/" />
}
