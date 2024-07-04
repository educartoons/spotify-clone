import { memo } from 'react'
import { Item } from '../types/types'
import PlaylistItem from './PlaylistItem'

type PlaylistProps = {
  handlePlaySong: () => void
  tracks: {
    items: Item[]
  }
}

const Playlist = memo(({ tracks, handlePlaySong }: PlaylistProps) => {
  console.count('rendering playlist')
  return (
    <div className="px-6 py-10">
      {tracks.items.map((item, index) => (
        <PlaylistItem key={item.track.id} item={item} index={index} />
      ))}
    </div>
  )
})

export default Playlist
