import { useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Item } from '../types/types'

type PlaylistItemProps = {
  item: Item
  index: number
}

dayjs.extend(relativeTime)

export default function PlaylistItem({ item, index }: PlaylistItemProps) {
  const [hover, setHover] = useState(false)

  const handleHover = () => {
    setHover(!hover)
  }
  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      role="listitem"
      className="text-white flex items-center p-2 px-4 rounded-md hover:bg-[rgba(255,255,255,0.1)]"
    >
      <div data-testid="index" className="text-white w-12 opacity-70">
        {hover ? '❤️' : index + 1}
      </div>
      <div className="text-white w-1/3">
        <div className="flex gap-4">
          <div>
            <figure className="w-10 rounded overflow-hidden">
              <img src={item.track.album.images[0].url} alt="" />
            </figure>
          </div>
          <div>
            <div className="text-sm">{item.track.name}</div>
            <div className="text-xs opacity-70">
              {item.track.artists.map((artist) => artist.name).join(' ,')}
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="text-xs opacity-70">{item.track.album.name}</div>
      </div>
      <div>
        <div className="text-xs opacity-70">
          {dayjs(item.added_at).fromNow()}
        </div>
      </div>
    </div>
  )
}
