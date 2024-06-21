import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Button from './Button'

export default function Searchbox() {
  const [text, setText] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const value = useRef(0)

  const handleClick = () => {
    value.current = value.current + 1
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }

  console.count('Rendering Searchbox')

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <input
        value={text}
        onChange={handleChange}
        ref={inputRef}
        className="bg-zinc-800 rounded-full px-6 py-4 outline-0 border-2 border-[transparent] focus:border-2 focus:border-white"
        type="text"
        placeholder="Que quieres reproducir?"
      />
      <Button onClick={handleClick} variant="outlined">
        Add
      </Button>
      <span className="text-white">{value.current}</span>
    </div>
  )
}
