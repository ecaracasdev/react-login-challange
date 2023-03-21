import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "admin",
  email: "",
  password: "",
  isLogged: false,
}

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogged = action.payload.isLogged
      state.email = action.payload.email
    },
    logout: (state, action) => {
        state.isLogged = action.payload.isLogged
    }
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
