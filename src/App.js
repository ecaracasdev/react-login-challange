import "./App.css"
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTodos } from "./features/tasks/taskSlice"
import { Login } from "./components/Login"
import { ProtectedRoute } from "./components/ProtectedRoute"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <div className="h-full min-h-screen">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter basename="/react-login-challange">
          <Routes>
            <Route index path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TaskList />} />
              <Route path="/create-task" element={<TaskForm />} />
              <Route path="/edit-task/:id" element={<TaskForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
