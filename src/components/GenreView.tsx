import { useParams } from 'react-router-dom'
import { useAppContext } from '../context/app-context'
import { useFetchCategory } from '../hooks/useFetchCategory'
import { useFetchPlayListsByCategory } from '../hooks/useFetchPlaylistsByCategory'
import CardPlaylist from './CardPlaylist'

export default function GenreView() {
  const { id } = useParams()
  const {
    credentials: { access_token },
  } = useAppContext()

  const [category] = useFetchCategory(id, access_token)
  const [playlists] = useFetchPlayListsByCategory(id, access_token)

  return (
    <div>
      <div className="bg-orange-400 px-5 pt-12 pb-8">
        <h2 className="text-white text-7xl font-bold">{category}</h2>
      </div>
      <div className="grid grid-cols-5">
        {playlists.map((playlist) => (
          <CardPlaylist key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  )
}
