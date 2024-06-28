import { Item } from '../types/types'
import PlaylistItem from './PlaylistItem'

type PlaylistProps = {
  tracks: {
    items: Item[]
  }
}

export default function Playlist({ tracks }: PlaylistProps) {
  return (
    <div className="px-6 py-10">
      {tracks.items.map((item, index) => (
        <PlaylistItem key={item.track.id} item={item} index={index} />
      ))}
    </div>
  )
}
