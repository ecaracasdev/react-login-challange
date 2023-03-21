import React from "react"
import { deleteTask } from "../features/tasks/taskSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
function TaskList() {
  const dispatch = useDispatch()

  const tasks = useSelector((state) => state.tasks.list)
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center p-4">
        <h1>Tasks {tasks.length}</h1>
        <Link
          to="/create-task"
          className="h-10 p-2 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        >
          {" "}
          Create Task
        </Link>
      </header>

      {tasks.map((task) => (
        <div className="mt-5 flex items-center justify-between p-2">
          <div key={task.id} className="flex items-center justify-center gap-2">
            <p className="text-base font-bold text-navy-700 dark:text-white">
              {task.title}
            </p>
            {/* <button onClick={() => handleDelete(task.id)}>Delete</button> */}

            <button
              onClick={() => handleDelete(task.id)}
              className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Delete
            </button>
            <div className="m-1">
              <Link
                to={`/edit-task/${task.id}`}
                className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
