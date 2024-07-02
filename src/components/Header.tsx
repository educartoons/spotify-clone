import { useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'
import { IconArrowLeft, IconArrowRight } from '../utils/icons'
import Searchbox from './Searchbox'
import { useUserContext } from '../context/user-context'

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { isAuthenticated, handleLogOut, user } = useUserContext()

  const handlePrev = () => {
    navigate(-1)
  }

  const handleNext = () => {
    navigate(1)
  }

  const handleLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
    const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-read-private%20user-read-email`
  }

  const handleGoProfile = () => {
    if (user) {
      navigate(`/user/${user.id}`)
    }
  }

  return (
    <header className="text-white h-[64px] px-5 bg-[rgba(255,255,255,0.07)] rounded-l-md rounded-r-md rounded-b-none sticky top-0 z-10">
      <div className="flex h-full justify-between items-center">
        <div className="flex items-center gap-4">
          <Button onClick={handlePrev} variant="icon">
            <IconArrowLeft className="w-4 fill-white" />
          </Button>
          <Button onClick={handleNext} variant="icon">
            <IconArrowRight className="w-4 fill-white" />
          </Button>
          {pathname === '/search' ? <Searchbox /> : null}
        </div>
        {!isAuthenticated ? (
          <div className="">
            <Button variant="text">Registrarse</Button>
            <Button onClick={handleLogin} variant="solid">
              Iniciar Sesion
            </Button>
          </div>
        ) : (
          <div className="flex items-center">
            <Button onClick={handleLogOut} variant="solid">
              Cerrar Sesion
            </Button>
            <Button onClick={handleGoProfile} variant="text">
              {user?.images[1].url ? (
                <figure className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={user?.images[1].url} alt="" />
                </figure>
              ) : (
                'Profile'
              )}
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
