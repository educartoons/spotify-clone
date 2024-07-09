import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  credentials: {
    access_token: string | null
    createdAt: string | null
  }
  filters: {
    searchTerm: string
  }
}

const initialState = {
  credentials: {
    access_token: window.localStorage.getItem('app_token') || null,
    createdAt: window.localStorage.getItem('app_token_expired') || null,
  },
  filters: {
    searchTerm: '',
  },
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setToken: (
      state: IState,
      action: PayloadAction<{
        token: string
      }>
    ) => {
      state.credentials.access_token = action.payload.token
      window.localStorage.setItem('app_token', action.payload.token)
      const date = new Date()
      window.localStorage.setItem('app_token_expired', date.toISOString())
    },
    setSearchTerm: (
      state,
      action: PayloadAction<{
        searchTerm: string
      }>
    ) => {
      state.filters.searchTerm = action.payload.searchTerm
    },
  },
})

const { setToken, setSearchTerm } = appSlice.actions

export { setToken, setSearchTerm }

export default appSlice.reducer
