import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Movies</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.linkedin.com/in/melaku-muluken" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://github.com/meliance" target="_blank" rel="noreferrer" className="mr-4 hover:underline">Github</a>
              </li>
              <li>
                  <a href="https://www.instagram.com/melakmu66/" target="_blank" rel="noreferrer" className="mr-4 hover:underline">Instagram</a>
              </li>
              <li>
                  <a href="https://twitter.com/melakmu66" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Twitter</a>
              </li>
          </ul>
      </footer>
  )
}