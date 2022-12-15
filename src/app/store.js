import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/apiSlice'
import gameReducer from '../features/game/gameSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
      game: gameReducer,
  },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware)
})