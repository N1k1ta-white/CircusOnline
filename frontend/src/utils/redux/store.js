import { configureStore } from '@reduxjs/toolkit'
import { registerReducer } from './slices/registerSlice'
import { authReducer } from './slices/authSlice'

const store = configureStore({
    reducer: {
      auth: authReducer,
      register: registerReducer
    }
})

export default store