import { CategoryPlayList } from '../hooks/useFetchPlaylistsByCategory'

type CardPlaylistProps = {
  playlist: CategoryPlayList
}

export default function CardPlaylist({
  playlist: { name, images, description },
}: CardPlaylistProps) {
  return (
    <div className="p-5">
      <figure className="rounded-md overflow-hidden bg-zinc-700 h-[200px]">
        <img className="h-full" src={images[0].url} alt={name} />
      </figure>
      <div className="pt-2">
        <h2 className="text-white text-base text-nowrap truncate">{name}</h2>
        <p className="text-zinc-400 text-xs mt-2 line-clamp-2">{description}</p>
      </div>
    </div>
  )
}
