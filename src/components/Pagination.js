import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setPagination,
  updatePagination,
} from "../features/pagination/paginationSlice"

function Pagination() {
  const tasks = useSelector((state) => state.tasks.list)
  const [currentPage, setCurrentPage] = useState(1)

  const pagination = useSelector((state) => state.pagination)
  const recordsPerPage = pagination.recordsPerPage

  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage

  const npages = Math.ceil(tasks.length / recordsPerPage)
  const numbers = [...Array(npages + 1).keys()].slice(1)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPagination({ currentPage, firstIndex, lastIndex }))
  })

  const nextPage = () => {
    if (currentPage !== npages) {
      setCurrentPage(currentPage + 1)
      dispatch(
        updatePagination({
          currentPage: currentPage + 1,
          firstIndex,
          lastIndex,
        })
      )
    }
  }

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      dispatch(
        updatePagination({
          currentPage: currentPage - 1,
          firstIndex,
          lastIndex,
        })
      )
    }
  }

  const changeCurrentPage = (n) => {
    setCurrentPage(n)
    dispatch(updatePagination({ currentPage: n, firstIndex, lastIndex }))
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="/#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="/#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{firstIndex + 1}</span> to{" "}
            <span className="font-medium">{lastIndex}</span> of{" "}
            <span className="font-medium">{tasks.length}</span> results,{" "}
            <span className="font-medium"> {" "} page {" "} {`${currentPage}/${npages}`}</span> 
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={prevPage}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {numbers
              .filter((n, i) => i <= 2)
              .map((n, i) => (
                <button
                  aria-current="page"
                  className={`relative items-center px-4 py-2 ${
                    currentPage === n
                      ? "inline-flex  bg-indigo-600  text-sm  text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "font-semibold hidden text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  } `}
                  key={i}
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </button>
              ))}

            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>

            {numbers
              .filter((n, i) => i >= npages - 3)
              .map((n, i) => (
                <button
                  aria-current="page"
                  className={`relative items-center px-4 py-2 ${
                    currentPage === n
                      ? "inline-flex  bg-indigo-600  text-sm  text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "font-semibold hidden text-sm text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                  } `}
                  key={i}
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </button>
              ))}

            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              onClick={nextPage}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
