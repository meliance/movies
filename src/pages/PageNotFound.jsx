import { Link } from "react-router-dom"
import NotFound from "../assets/notFound.jpg"
import { Button } from "../components"
import { useEffect } from "react"

export const PageNotFound = () => {
  useEffect(() => {
    document.title=`Page Not Found / movies`
  })
  return (
    <main className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white ">404 Oops</p>
        <div className="max-w-2xl">
        <img className="rounded" src={NotFound} alt="404 Page Not Found" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
        <Button>Back To Movies</Button>
        </Link>
      </div>
    </main>
  )
}
