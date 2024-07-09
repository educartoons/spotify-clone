import { ChangeEvent, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import { setSearchTerm } from '@/store/appSlice'

export default function Searchbox() {
  const {
    filters: { searchTerm },
  } = useSelector((state: RootState) => state.app)
  const dispatch = useDispatch()

  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm({ searchTerm: event.target.value }))
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
