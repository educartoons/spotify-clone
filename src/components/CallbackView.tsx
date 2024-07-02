import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import { useUserContext } from '../context/user-context'

export default function CallbackView() {
  const navigate = useNavigate()
  const { handleSetToken } = useUserContext()

  const handleSaveToken = () => {
    const hash = window.location.hash
    const result = /access_token=(.+)&token_type/.exec(hash)
    if (result && result[1]) {
      const token = result[1]
      window.localStorage.setItem('user_token', token)
      handleSetToken(token)
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
