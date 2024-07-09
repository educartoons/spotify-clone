import { Outlet, Navigate } from 'react-router-dom'
// import Spinner from './Spinner'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state: RootState) => state.user)

  if (isAuthenticated) {
    return <Outlet />
  }

  return <Navigate to="/" />
}
