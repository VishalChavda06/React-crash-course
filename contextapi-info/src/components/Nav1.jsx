import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Nav1 = () => {
  const { theme } = useContext(ThemeDataContext)

  return (
    <div>
      <ul className='flex gap-4 sm:gap-6 lg:gap-8 items-center font-semibold text-sm sm:text-base'>
        <li className={`transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg hover:scale-105 ${
          theme === "dark" 
            ? "text-gray-300 hover:text-white hover:bg-gray-800" 
            : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
        }`}>
          Home
        </li>
        <li className={`transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg hover:scale-105 ${
          theme === "dark" 
            ? "text-gray-300 hover:text-white hover:bg-gray-800" 
            : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
        }`}>
          About
        </li>
        <li className={`transition-all duration-300 cursor-pointer px-3 py-2 rounded-lg hover:scale-105 ${
          theme === "dark" 
            ? "text-gray-300 hover:text-white hover:bg-gray-800" 
            : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
        }`}>
          Contact
        </li>
        <li className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
          theme === "dark" 
            ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900" 
            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        }`}>
          <span className='hidden sm:inline'>Theme: </span>
          <span className='font-bold capitalize'>{theme}</span>
        </li>
      </ul>
    </div>
  )
}

export default Nav1