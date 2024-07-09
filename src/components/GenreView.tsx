import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import CardPlaylist from './CardPlaylist'
import { fetchCategoryById, fetchPlaylistsByCategoryId } from '../api/api'
import { CategoryPlayList } from '../types/types'
import { RootState } from '@/store/store'

export default function GenreView() {
  const { id } = useParams()

  const {
    credentials: { access_token },
  } = useSelector((state: RootState) => state.app)

  const { data: category } = useQuery<string>(
    `category-${id}`,
    () => {
      return fetchCategoryById(id!, access_token!)
    },
    {
      enabled: id !== undefined && access_token !== '',
    }
  )
  const { data: playlists } = useQuery<CategoryPlayList[]>(
    `category-${id}-playlists`,
    () => {
      return fetchPlaylistsByCategoryId(id!, access_token!)
    },
    {
      enabled: access_token !== null && id !== undefined,
    }
  )

  return (
    <div>
      <div className="bg-orange-400 px-5 pt-12 pb-8">
        <h2 className="text-white text-7xl font-bold">{category}</h2>
      </div>
      <div className="grid grid-cols-5">
        {playlists
          ? playlists.map((playlist, index) => (
              <CardPlaylist key={index} playlist={playlist} />
            ))
          : null}
      </div>
    </div>
  )
}
