type Image = {
  url: string
}

export type CategoryPlayList = {
  id: string
  name: string
  description: string
  images: Image[]
}

export type Artist = {
  name: string
}

export type Item = {
  track: {
    id: string
    name: string
    album: {
      name: string
      duration_ms: number
      images: Image[]
    }
    artists: Artist[]
  }
  added_at: string
}

export type Playlist = {
  name: string
  description: string
  images: Image[]
  followers: {
    total: number
  }
  tracks: {
    items: Item[]
  }
}
