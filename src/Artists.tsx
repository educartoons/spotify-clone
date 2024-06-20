import { useEffect } from 'react'
import Profile from './Profile'

const ARTISTS_API = [
  {
    id: 0,
    name: 'Feid',
    url: 'https://i.scdn.co/image/ab67616100005174e82c62cc8cf019aecfd71ee8',
  },
  {
    id: 1,
    name: 'Karol G',
    url: 'https://i.scdn.co/image/ab6761610000517400bfcedce3845ae969c8277a',
  },
  {
    id: 2,
    name: 'Bud Bunny',
    url: 'https://i.scdn.co/image/ab676161000051749ad50e478a469448c6f369df',
  },
  {
    id: 3,
    name: 'Rauw Alejandro',
    url: 'https://i.scdn.co/image/ab67616100005174a4b011e4e1692bd031b4425d',
  },
  {
    id: 4,
    name: 'Maluma',
    url: 'https://i.scdn.co/image/ab67616100005174ac7a43997c5ec211ef16c502',
  },
  {
    id: 5,
    name: 'Mike Towers',
    url: 'https://i.scdn.co/image/ab676161000051749e35c3c5de877f99a8f6192f',
  },
]

export default function Artists() {
  return (
    <div className="flex">
      {ARTISTS_API.map((element) => (
        <Profile key={element.id} name={element.name} url={element.url} />
      ))}
    </div>
  )
}
