import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'

export default function Callback() {
  const navigate = useNavigate()

  const getUserToken = () => {
    const hash = window.location.hash
    const result = /access_token=(.+?)&/.exec(hash)
    if (result && result[1]) {
      window.localStorage.setItem('user_token', result[1])
    }
    navigate('/')
  }

  useEffect(() => {
    getUserToken()
  }, [])

  return (
    <div className="text-center p-12">
      <Spinner />
    </div>
  )
}
