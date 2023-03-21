import { configureStore } from "@reduxjs/toolkit"
import taskReducer from "../features/tasks/taskSlice"

// dentro del configure store vamos a poder dividir el state entre multiples archivos
// el configure store nos retorna un state

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
})
