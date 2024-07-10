import { memo } from 'react'
import { Item } from '../types/types'
import PlaylistItem from './PlaylistItem'
import { cleanTracks } from '@/utils/utils'

type PlaylistProps = {
  handlePlaySong: () => void
  tracks: {
    items: Item[]
  }
}

const Playlist = memo(({ tracks }: PlaylistProps) => {
  const cleanedTracks = cleanTracks(tracks)
  return (
    <div role="list" className="px-6 py-10">
      {cleanedTracks.items.map((item, index) => (
        <PlaylistItem key={item.track.id} item={item} index={index} />
      ))}
    </div>
  )
})

export default Playlist
