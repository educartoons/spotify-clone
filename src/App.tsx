import { useState } from 'react'
import Artists from './Artists'
import Button from './Button'
import Header from './Header'
import Player from './Player'

export default function App() {
  const [showPlayer, setShowPlayer] = useState(false)
  // JSX
  return (
    <div className="bg-black min-h-screen">
      <div>
        <Header />
        <Artists />
        <div>
          <Button onClick={() => setShowPlayer(!showPlayer)} variant="solid">
            Show Player
          </Button>
        </div>
        {showPlayer ? <Player /> : null}
      </div>
    </div>
  )
}
