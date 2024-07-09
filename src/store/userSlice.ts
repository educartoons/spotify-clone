import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/react'

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

type InitialState = {
  credentials: {
    access_token: string | null
    created_at: string | null
  }
  user: UserDetails
  isAuthenticated: boolean
}

const initialState: InitialState = {
  credentials: {
    access_token: window.localStorage.getItem('user_token') || null,
    created_at: window.localStorage.getItem('user_token_expired') || null,
  },
  isAuthenticated: window.localStorage.getItem('isAuthenticated')
    ? JSON.parse(window.localStorage.getItem('isAuthenticated')!)
    : false,
  user: window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user')!)
    : undefined,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserToken: (
      state,
      action: PayloadAction<{
        token: string
      }>
    ) => {
      const expired = new Date().toISOString()
      state.credentials.access_token = action.payload.token
      state.credentials.created_at = expired
      state.isAuthenticated = true

      window.localStorage.setItem('user_token', action.payload.token)
      window.localStorage.setItem('user_token_expired', expired)
      window.localStorage.setItem('isAuthenticated', 'true')
    },
    logOut: (state) => {
      state.credentials.access_token = null
      state.credentials.created_at = null
      state.isAuthenticated = false
      state.user = undefined

      window.localStorage.removeItem('user_token')
      window.localStorage.removeItem('user_token_expired')
      window.localStorage.removeItem('isAuthenticated')
      window.localStorage.removeItem('user')
    },
    setUserDetails: (
      state,
      action: PayloadAction<{
        user: UserDetails
      }>
    ) => {
      state.user = action.payload.user

      window.localStorage.setItem('user', JSON.stringify(action.payload.user))
    },
  },
})

const { setUserToken, logOut, setUserDetails } = userSlice.actions

export { setUserToken, logOut, setUserDetails }

export default userSlice.reducer
