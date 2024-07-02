import { createContext, useContext, useEffect, useState } from 'react'
import { fetchUserProfile } from '../api/api'

type Image = {
  url: string
}

type UserDetails =
  | {
      display_name: string
      id: string
      email: string
      images: Image[]
    }
  | undefined

type User = {
  user: UserDetails
  token: string | undefined
  handleSetToken: (token: string) => void
  isAuthenticated: boolean
  handleLogOut: () => void
  hasLoaded: boolean
}

const UserContext = createContext<User | undefined>(undefined)

type UserContextProviderProps = {
  children: React.ReactNode
}

function UserContextProvider({ children }: UserContextProviderProps) {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(() => {
    const token = window.localStorage.getItem('user_token')
    if (token) {
      return token
    }
    return undefined
  })
  const [user, setUser] = useState(() => {
    const user = window.localStorage.getItem('user')
    if (user && user !== undefined && user !== 'undefined') {
      return JSON.parse(user)
    }
    return undefined
  })

  const handleSetToken = async (_token: string) => {
    setToken(_token)
    const data = await fetchUserProfile(_token)
    window.localStorage.setItem('user', JSON.stringify(data))
    setUser(data)
  }

  const handleLogOut = async () => {
    setIsAuthenticated(false)
    setToken(undefined)
    window.localStorage.removeItem('user_token')
  }

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    setHasLoaded(true)
  }, [token])

  return (
    <UserContext.Provider
      value={{
        token: token,
        handleSetToken,
        isAuthenticated,
        handleLogOut,
        user: user,
        hasLoaded: hasLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUserContext() {
  const value = useContext(UserContext)
  if (value === undefined) {
    throw new Error('useUserContext should be used inside of the UserContext')
  }
  return value
}

export { useUserContext, UserContextProvider }
