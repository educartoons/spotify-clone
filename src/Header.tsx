import Button from './Button'
import { IconArrowLeft, IconArrowRight } from './utils/icons'

export default function Header() {
  return (
    <header className="text-white flex justify-between p-4">
      <div className="flex">
        <Button variant="icon">
          <IconArrowLeft className="w-4 fill-white" />
        </Button>
        <Button variant="icon">
          <IconArrowRight className="w-4 fill-white" />
        </Button>
      </div>
      <div>
        <Button variant="text">Registrarse</Button>
        <Button variant="solid">Iniciar Sesion</Button>
      </div>
    </header>
  )
}
