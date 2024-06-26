import { useEffect, useState } from 'react'

type Image = {
  url: string
}

export type CategoryPlayList = {
  id: string
  name: string
  description: string
  images: Image[]
}

function useFetchPlayListsByCategory(
  categoryId: string | undefined,
  token: string
) {
  const [playlists, setPlaylists] = useState<CategoryPlayList[]>([])

  const fetchPlaylists = async () => {
    const response = await fetch(
      `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    if (response.ok) {
      const data = await response.json()
      setPlaylists(data.playlists.items)
    }
  }

  useEffect(() => {
    if (token !== '' && categoryId) {
      fetchPlaylists()
    }
  }, [categoryId, token])

  return [playlists]
}

export { useFetchPlayListsByCategory }
