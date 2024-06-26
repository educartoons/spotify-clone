import { useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'
import { IconArrowLeft, IconArrowRight } from '../utils/icons'
import Searchbox from './Searchbox'

export default function Header() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handlePrev = () => {
    navigate(-1)
  }

  const handleNext = () => {
    navigate(1)
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
        <div className="">
          <Button variant="text">Registrarse</Button>
          <Button variant="solid">Iniciar Sesion</Button>
        </div>
      </div>
    </header>
  )
}
