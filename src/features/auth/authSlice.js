import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: 'admin',
    email: '',
    password: '',
    isLogged: false,
}

export const authSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setAuth: (state, action) => {
            state.isLogged = action.payload.isLogged
            state.email = action.payload.email
          },
    },
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer