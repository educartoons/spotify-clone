import { useLocation } from 'react-router-dom'
import Button from './Button'
import { IconArrowLeft, IconArrowRight } from '../utils/icons'
import Searchbox from './Searchbox'

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className="text-white p-4 bg-[rgba(255,255,255,0.07)] rounded-l-md rounded-r-md rounded-b-none sticky top-0 z-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Button variant="icon">
            <IconArrowLeft className="w-4 fill-white" />
          </Button>
          <Button variant="icon">
            <IconArrowRight className="w-4 fill-white" />
          </Button>
          {pathname === '/search' ? <Searchbox /> : null}
        </div>
        <div>
          <Button variant="text">Registrarse</Button>
          <Button variant="solid">Iniciar Sesion</Button>
        </div>
      </div>
    </header>
  )
}
