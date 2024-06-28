import { Buffer } from 'buffer'

const fetchTokenApp = async () => {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          import.meta.env.VITE_SPOTIFY_CLIENT_ID +
            ':' +
            import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
        ).toString('base64'),
    },
  })

  if (response.ok) {
    const data = await response.json()
    return data.access_token
  }
}

const fetchCategories = async (token: string) => {
  const response = await fetch('https://api.spotify.com/v1/browse/categories', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (response.ok) {
    const data = await response.json()
    return data.categories.items
  }
  throw new Error('Something went wrong!')
}

const fetchCategoryById = async (categoryId: string, token: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/browse/categories/${categoryId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (response.ok) {
    const data = await response.json()
    return data.name
  }
}

const fetchPlaylistById = async (playlistId: string, token: string) => {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  if (response.ok) {
    const data = await response.json()
    return data
  }
}

const fetchPlaylistsByCategoryId = async (
  categoryId: string,
  token: string
) => {
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
    return data.playlists.items
  }
}

export {
  fetchTokenApp,
  fetchCategories,
  fetchCategoryById,
  fetchPlaylistById,
  fetchPlaylistsByCategoryId,
}
