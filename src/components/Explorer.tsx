import { MUSIC_GENDERS } from '../utils/constants'
import CardMusicGender from './CardMusicGender'

export default function Explorer() {
  return (
    <div className="p-4 bg-[linear-gradient(180deg,_rgba(31,31,31,1)_0%,_rgba(31,31,31,1)_16%,_rgba(18,18,18,1)_100%)] rounded-md rounded-t-none">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
        {MUSIC_GENDERS.map((item, index) => (
          <CardMusicGender
            key={index}
            name={item.name}
            color={item.color}
            image={item.image}
          />
        ))}
      </div>
    </div>
  )
}
