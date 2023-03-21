import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
  },
  reducers: {
    setTodoList: (state, action) => {
      state.list = action.payload
    },
    addTask: (state, action) => {
      state.list.push(action.payload)
    },
    deleteTask: (state, action) => {
      const taskFound = state.list.find((task) => task.id === action.payload)
      if (taskFound) {
        state.list.splice(state.list.indexOf(taskFound), 1)
      }
    },
    editTask: (state, action) => {
      const { id, title } = action.payload
      const taskFound = state.list.find((task) => task.id === id)
      if (taskFound) {
        taskFound.title = title
      }
    },
    completeTask: (state, action) => {
      const taskFound = state.list.find((task) => task.id === action.payload)
      console.log(action.payload)
      if (taskFound) {
        console.log("first")
        taskFound.completed = !taskFound.completed
      }
    },
  },
})

export const { setTodoList, addTask, deleteTask, editTask, completeTask } =
  taskSlice.actions

export default taskSlice.reducer

export const fetchTodos = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      dispatch(setTodoList(response.data))
    })
    .catch((error) => console.log(error))
}
