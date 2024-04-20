
export const Button = ({children}) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2">{children}</button>
  )
}
