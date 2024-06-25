import { useEffect, useState } from 'react'
import CardMusicGender from './CardMusicGender'
import { useAppContext } from '../context/app-context'
import { getColorFromURL } from '../utils/utils'

type Icon = {
  url: string
}

type Category = {
  name: string
  id: string
  href: string
  icons: Icon[]
}

export default function Explorer() {
  const [categories, setCategories] = useState<Category[]>([])
  const {
    credentials: { access_token },
  } = useAppContext()

  const fetchCategories = async () => {
    if (access_token && access_token !== '') {
      const response = await fetch(
        'https://api.spotify.com/v1/browse/categories',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      )

      if (response.ok) {
        const data = await response.json()
        setCategories(data.categories.items)
      }
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [access_token])

  return (
    <div className="p-4 bg-[linear-gradient(180deg,_rgba(31,31,31,1)_0%,_rgba(31,31,31,1)_16%,_rgba(18,18,18,1)_100%)] rounded-md rounded-t-none">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
        {categories.map((category) => (
          <CardMusicGender
            key={category.id}
            name={category.name}
            color="black"
            image={category.icons[0].url}
          />
        ))}
      </div>
    </div>
  )
}
