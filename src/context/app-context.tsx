import { createContext, useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { fetchTokenApp } from '../api/api'

type AppContextT = {
  credentials: {
    access_token: string
    createdAt: string
  }
  filters: {
    searchTerm: string
  }
  handleSearchTerm: (str: string) => void
}

const AppContext = createContext<AppContextT | undefined>(undefined)

type AppContextProviderProps = {
  children: React.ReactNode
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [token, setToken] = useState('')
  const [createdAt, setCreatedAt] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const getSpotifyToken = async () => {
    const token = await fetchTokenApp()
    setToken(token)
    const date = new Date().toISOString()
    setCreatedAt(date)
    window.localStorage.setItem('token', token)
    window.localStorage.setItem('expired', date)
  }

  const fetchSpotifyToken = async () => {
    const tokenFromLocalStorage = window.localStorage.getItem('token')
    const expired = window.localStorage.getItem('expired')

    if (tokenFromLocalStorage && expired) {
      const expiredDate = dayjs(expired).add(1, 'hour')
      const currentDate = dayjs()
      if (expiredDate.isAfter(currentDate)) {
        setToken(tokenFromLocalStorage)
      } else {
        getSpotifyToken()
      }
    } else {
      getSpotifyToken()
    }
  }

  const handleSearchTerm = (str: string) => {
    setSearchTerm(str)
  }

  useEffect(() => {
    fetchSpotifyToken()
  }, [])

  return (
    <AppContext.Provider
      value={{
        credentials: {
          access_token: token,
          createdAt: '',
        },
        filters: {
          searchTerm: searchTerm,
        },
        handleSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

function useAppContext() {
  const value = useContext(AppContext)
  if (value === undefined) {
    throw new Error('useAppContext should be used inside AppContext')
  }
  return value
}

export { AppContextProvider, useAppContext }
