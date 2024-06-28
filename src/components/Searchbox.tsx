import { ChangeEvent, useEffect, useRef } from 'react'
import { useAppContext } from '../context/app-context'

export default function Searchbox() {
  const {
    filters: { searchTerm },
    handleSearchTerm,
  } = useAppContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <input
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
        className="bg-zinc-800 rounded-full px-6 py-3 outline-0 border-2 border-[transparent] focus:border-2 focus:border-white"
        type="text"
        placeholder="Que quieres reproducir?"
      />
    </div>
  )
}
