import { describe, test, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import Playlist from '../Playlist'
import { dummyPlaylist } from './data'

describe('<Playlist />', () => {
  test('should not display any listitem', () => {
    const props = {
      tracks: {
        items: [],
      },
      handlePlaySong: () => {},
    }
    const { queryAllByRole } = render(<Playlist {...props} />)

    const items = queryAllByRole('listitem')

    expect(items.length).toEqual(0)
  })

  test('should display all the listitem', () => {
    cleanup()
    const props = {
      tracks: dummyPlaylist,
      handlePlaySong: () => {},
    }
    const { queryAllByRole } = render(<Playlist {...props} />)

    const items = queryAllByRole('listitem')

    expect(items.length).toEqual(props.tracks.items.length)
  })
})
