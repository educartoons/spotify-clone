import { Link } from 'react-router-dom'
import { CategoryPlayList } from '../types/types'

type CardPlaylistProps = {
  playlist: CategoryPlayList
}

export default function CardPlaylist({
  playlist: { name, images, description, id },
}: CardPlaylistProps) {
  return (
    <Link to={`/playlist/${id}`}>
      <div className="p-5 hover:bg-[rgba(255,255,255,0.1)] rounded-md">
        <figure className="rounded-md overflow-hidden bg-zinc-700 h-[200px]">
          <img className="h-full" src={images[0].url} alt={name} />
        </figure>
        <div className="pt-2">
          <h2 className="text-white text-base text-nowrap truncate">{name}</h2>
          <p className="text-zinc-400 text-xs mt-2 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}
