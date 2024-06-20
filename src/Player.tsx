import { KeyboardEvent, useEffect, useState } from 'react'
import Button from './Button'
import {
  IconPlay,
  IconPlayerBefore,
  IconPlayerNext,
  IconPlayerPause,
} from './utils/icons'

export default function Player() {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying((current) => !current)
  }

  const handleKeyPress = (event: KeyboardEvent) => {
    console.log('user pressing keys')
    if (event.key === ' ') {
      handlePlay()
    }
  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <div className="flex gap-2">
      <div>
        <Button variant="icon">
          <IconPlayerBefore className="w-4 fill-gray-400" />
        </Button>
      </div>
      <div>
        <Button onClick={handlePlay} variant="iconInvert">
          {playing ? (
            <IconPlayerPause className="fill-black w-3" />
          ) : (
            <IconPlay className="fill-black w-3" />
          )}
        </Button>
      </div>
      <div>
        <Button variant="icon">
          <IconPlayerNext className="w-4 fill-gray-400" />
        </Button>
      </div>
    </div>
  )
}
