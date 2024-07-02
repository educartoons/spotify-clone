import { Outlet, Navigate } from 'react-router-dom'
import { useUserContext } from '../context/user-context'
import Spinner from './Spinner'
import { useEffect } from 'react'

export default function ProtectedRoute() {
  const { isAuthenticated, hasLoaded } = useUserContext()

  console.log(hasLoaded)

  useEffect(() => {
    console.count('sd')
    console.log(hasLoaded)
  }, [hasLoaded])

  if (hasLoaded === false) return <Spinner />

  if (isAuthenticated) {
    return <Outlet />
  }

  return <Navigate to="/" />
}
