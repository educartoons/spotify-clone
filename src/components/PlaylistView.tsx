import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useAppContext } from '../context/app-context'
import Playlist from './Playlist'
import { fetchPlaylistById } from '../api/api'

export default function PlaylistView() {
  const { id } = useParams()
  const {
    credentials: { access_token },
  } = useAppContext()

  const { data: playlist } = useQuery(
    `playlist-${id}`,
    () => {
      return fetchPlaylistById(id!, access_token)
    },
    { enabled: access_token !== '' && id !== undefined }
  )

  return (
    <div>
      <div className="bg-[#bcbc36] flex px-6 py-5 gap-5">
        <div>
          <figure className="w-[200px]">
            <img src={playlist?.images[0].url} alt={playlist?.name} />
          </figure>
        </div>
        <div>
          <p className="text-white mt-6">Lista</p>
          <h2 className="text-white text-7xl font-bold">{playlist?.name}</h2>
          <p
            className="text-[rgba(0,0,0,0.65)] text-xs"
            dangerouslySetInnerHTML={{
              __html: playlist?.description,
            }}
          />
        </div>
      </div>
      {playlist ? <Playlist tracks={playlist?.tracks} /> : null}
    </div>
  )
}
