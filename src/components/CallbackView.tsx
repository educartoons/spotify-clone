import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { setUserDetails, setUserToken } from '@/store/userSlice'
import { fetchUserProfile } from '@/api/api'

export default function CallbackView() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSaveToken = async () => {
    const hash = window.location.hash
    const result = /access_token=(.+)&token_type/.exec(hash)
    if (result && result[1]) {
      const token = result[1]
      const user = await fetchUserProfile(token)
      if (user) {
        dispatch(setUserDetails({ user }))
      }
      dispatch(setUserToken({ token: token }))
    }
    navigate('/')
  }

  useEffect(() => {
    handleSaveToken()
  }, [])

  return (
    <div className="p-12">
      <Spinner />
    </div>
  )
}
