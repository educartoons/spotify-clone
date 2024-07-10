import { describe, test, expect } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup, screen } from '@testing-library/react'
import CardMusicGender from '../CardMusicGender'
import '@testing-library/jest-dom/vitest'

describe('<CardMusicGender />', () => {
  const props = {
    id: '1',
    name: 'Especialmente para ti',
    color: 'red',
    image: 'https://t.scdn.co/images/728ed47fc1674feb95f7ac20236eb6d7.jpeg',
  }

  test('should render', () => {
    render(
      <BrowserRouter>
        <CardMusicGender {...props} />
      </BrowserRouter>
    )
  })

  test('should display the category name', () => {
    cleanup()
    const { queryByText } = render(
      <BrowserRouter>
        <CardMusicGender {...props} />
      </BrowserRouter>
    )

    const title = queryByText(props.name)

    expect(title).toBeInTheDocument()
  })

  test('should display an image', () => {
    cleanup()
    const { queryByRole } = render(
      <BrowserRouter>
        <CardMusicGender {...props} />
      </BrowserRouter>
    )
    const figure = queryByRole('img')

    expect(figure).toBeInTheDocument()
  })
})
