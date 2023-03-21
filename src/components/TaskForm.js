import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { v4 as uid } from "uuid"
import { addTask, editTask } from "../features/tasks/taskSlice"

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
  })

  const navigate = useNavigate()
  const dispatch = useDispatch() //permite disparar eventos desde el slice
  const params = useParams()

  const tasks = useSelector((state) => state.tasks.list)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    })
  }

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === Number(params.id)))
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (params.id) {
      dispatch(editTask(task))
    } else {
      dispatch(
        addTask({
          ...task,
          id: uid(),
          userId: uid(),
          completed: false,
        })
      )
    }

    navigate("/")
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={task.title}
      />
      <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
        Save
      </button>
    </form>
  )
}

export default TaskForm
