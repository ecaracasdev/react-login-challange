import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentPage: 1,
  recordsPerPage: 5,
  firstIndex: null,
  lastIndex: null,
  npages: null,
  numbers: null,
}

export const paginationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.firstIndex = action.payload.firstIndex
      state.lastIndex = action.payload.lastIndex
    },
    updatePagination: (state, action) => {
      state.currentPage = action.payload.n
      state.firstIndex = action.payload.firstIndex
      state.lastIndex = action.payload.lastIndex
    },
    setRecords: (state, action) => {
      state.recordsPerPage = action.payload.recordsPerPage
    },
  },
})

export const { updatePagination, setPagination, setRecords } =
  paginationSlice.actions

export default paginationSlice.reducer
