import { createContext, useContext, useEffect, useState } from 'react'
import { fetchTokenApp } from '../api/api'

type AppContextT = {
  credentials: {
    access_token: string
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
  const [searchTerm, setSearchTerm] = useState('')

  const fetchSpotifyToken = async () => {
    const tokenFromLocalStorage = window.localStorage.getItem('token')

    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage)
    } else {
      const token = await fetchTokenApp()
      setToken(token)
      window.localStorage.setItem('token', token)
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
