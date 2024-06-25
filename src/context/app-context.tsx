import { createContext, useContext, useEffect, useState } from 'react'
import { Buffer } from 'buffer'

type AppContextT = {
  credentials: {
    access_token: string
  }
}

const AppContext = createContext<AppContextT | undefined>(undefined)

type AppContextProviderProps = {
  children: React.ReactNode
}

function AppContextProvider({ children }: AppContextProviderProps) {
  const [token, setToken] = useState('')

  const fetchSpotifyToken = async () => {
    const tokenFromLocalStorage = window.localStorage.getItem('token')

    if (tokenFromLocalStorage) {
      setToken(tokenFromLocalStorage)
    } else {
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
        setToken(data.access_token)
        window.localStorage.setItem('token', data.access_token)
      }
    }
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
