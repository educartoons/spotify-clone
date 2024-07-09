import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import CardMusicGender from './CardMusicGender'
import { getColorFromURL } from '../utils/utils'
import { fetchCategories } from '../api/api'
import { RootState } from '@/store/store'

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
  const {
    credentials: { access_token },
    filters: { searchTerm },
  } = useSelector((state: RootState) => state.app)

  const { data } = useQuery<Category[]>(
    'fetchCategories',
    () => {
      return fetchCategories(access_token!)
    },
    {
      enabled: access_token !== null,
    }
  )

  const categories =
    searchTerm === ''
      ? data
      : data?.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        )

  return (
    <div className="p-4 bg-[linear-gradient(180deg,_rgba(31,31,31,1)_0%,_rgba(31,31,31,1)_16%,_rgba(18,18,18,1)_100%)] rounded-md rounded-t-none">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6">
        {categories
          ? categories.map((category) => (
              <CardMusicGender
                key={category.id}
                id={category.id}
                name={category.name}
                color={getColorFromURL(category.icons[0].url)}
                image={category.icons[0].url}
              />
            ))
          : null}
      </div>
    </div>
  )
}
