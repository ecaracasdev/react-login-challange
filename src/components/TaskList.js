import React from "react"
import { completeTask, deleteTask } from "../features/tasks/taskSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logout } from "../features/auth/authSlice"
import Pagination from "./Pagination"
import PageSelector from "./PageSelector"
function TaskList() {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.tasks.list)
  const pagination = useSelector((state) => state.pagination)
  const records = tasks.slice(pagination.firstIndex, pagination.lastIndex)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }

  const handleLogOut = () => {
    dispatch(
      logout({
        isLogged: false,
      })
    )
  }

  const markAsComplete = (id) => {
    dispatch(completeTask(id))
  }

  return (
    <div className="sm:px-6 w-full">
      <div className="px-4 md:px-10 py-4 md:py-7">
        <div className="flex items-center justify-between">
          <p
            tabIndex="0"
            className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
          >
            Tasks
          </p>
          <button
            onClick={handleLogOut}
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2  border rounded-full"
          >
            LogOut
          </button>
        </div>
      </div>
      <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <div className="sm:flex items-center justify-between">
          <div className="flex items-center">
            <PageSelector />
          </div>

          <Link
            to="/create-task"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
          >
            <p className="text-sm font-medium leading-none text-white">
              Add Task
            </p>
          </Link>
        </div>
        <div className="mt-7 overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <tbody>
              {records.map((task, i) => (
                <tr
                  key={task.id}
                  tabIndex={i}
                  className="focus:outline-none h-16 border border-gray-100 rounded"
                >
                  <td>
                    <div className="ml-5">
                      <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => markAsComplete(task.id)}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="">
                    <div className="flex items-center pl-5">
                      <p className="text-base font-medium leading-none text-gray-700 mr-2">
                        {task.title}
                      </p>
                    </div>
                  </td>
                  <td className="pl-5">
                    <button
                      className={`py-3 px-3 text-sm focus:outline-none leading-none rounded ${
                        task.completed
                          ? "text-green-700 bg-green-100"
                          : "text-red-700 bg-red-100"
                      }`}
                    >
                      {task.completed ? "completed" : "pending"}
                    </button>
                  </td>
                  <td className="">
                    <Link
                      to={`/edit-task/${task.id}`}
                      className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="h-3"></tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default TaskList
