import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'
import Nav1 from './Nav1'

const Navbar = () => {
  const { theme } = useContext(ThemeDataContext)

  return (
    <nav className={`sticky top-0 flex justify-center z-50 w-full backdrop-blur-md transition-all duration-500 ${
      theme === "dark" 
        ? "bg-gray-900/80 border-b border-gray-800/50 shadow-xl shadow-gray-900/50" 
        : "bg-white/80 border-b border-gray-200/50 shadow-lg shadow-gray-200/30"
    }`}>
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-4 sm:py-5 flex justify-between items-center'>
        <h3 className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${
          theme === "dark" 
            ? "bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text" 
            : "bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text"
        }`}>
          Context API
        </h3>
        <Nav1 />
      </div>
    </nav>
  )
}

export default Navbar