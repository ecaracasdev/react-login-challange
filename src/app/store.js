import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../features/tasks/taskSlice"
import authReducer from "../features/auth/authSlice"
// dentro del configure store vamos a poder dividir el state entre multiples archivos
// el configure store nos retorna un state

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    auth: authReducer
  },
})
