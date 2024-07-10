import { describe, test, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlaylistItem from '../PlaylistItem'

describe('<PlaylistItem />', () => {
  const props = {
    item: {
      added_at: '2024-04-26T15:54:28Z',
      track: {
        id: '6xp1u6ZEHXX8DxJIFFrVoP',
        name: 'Little Things x Gypsy Woman - L BEATS MASHUP',
        album: {
          name: 'Little Things x Gypsy Woman (L BEATS MASHUP)',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67616d0000b27393844705a9f375b857203617',
              width: 640,
              height: 640,
            },
            {
              url: 'https://i.scdn.co/image/ab67616d00001e0293844705a9f375b857203617',
              width: 300,
              height: 300,
            },
            {
              url: 'https://i.scdn.co/image/ab67616d0000485193844705a9f375b857203617',
              width: 64,
              height: 64,
            },
          ],
        },
        artists: [
          {
            name: 'Jorja Smith',
          },
        ],
      },
    },
    index: 0,
  }

  test('should display a number if the user is not hoviring the element', () => {
    const { queryByTestId } = render(<PlaylistItem {...props} />)
    const index = queryByTestId('index')
    expect(index?.textContent).toBe('1')
  })

  test('should display a heart if the user is hoviring the element', async () => {
    cleanup()
    const { queryByTestId } = render(<PlaylistItem {...props} />)
    const index = queryByTestId('index')

    await userEvent.hover(index!)
    expect(index?.textContent).toBe('❤️')
  })
})
