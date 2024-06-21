import { Link } from 'react-router-dom'
import { IconHome, IconSearch, SpotifyLogotype } from '../utils/icons'

export default function BasicMenu() {
  return (
    <div className="bg-[rgba(255,255,255,0.07)] rounded-md p-4">
      <div className="mb-5">
        <a href="">
          <SpotifyLogotype className="fill-white" />
        </a>
      </div>
      <nav>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              to="/"
              className="text-zinc-400 font-medium flex items-center gap-5 text-sm underline-offset-[6px] hover:underline hover:text-white"
            >
              <IconHome className="w-6 fill-zinc-400" />
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="text-zinc-400 font-medium flex items-center gap-5 text-sm underline-offset-[6px] hover:underline hover:text-white"
            >
              <IconSearch className="w-6 fill-zinc-400" />
              Buscar
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
