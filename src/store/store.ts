import { configureStore } from '@reduxjs/toolkit'
import appReducer from '@/store/appSlice'
import useReducer from '@/store/userSlice'

const store = configureStore({
  reducer: {
    app: appReducer,
    user: useReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export { store }
