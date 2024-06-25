import { createContext, useContext } from 'react'

type User = {
  user: {
    username: string
    age: number
  }
}

const UserContext = createContext<User | undefined>(undefined)

type UserContextProviderProps = {
  children: React.ReactNode
}

function UserContextProvider({ children }: UserContextProviderProps) {
  return (
    <UserContext.Provider
      value={{
        user: {
          username: 'educartoons@gmail.com',
          age: 34,
        },
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
