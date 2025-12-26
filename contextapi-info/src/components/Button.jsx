import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeDataContext)

    return (
        <div className='flex justify-center items-center mt-8'>
            <button 
                onClick={toggleTheme}
                className={`group relative px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg shadow-2xl
                    transform transition-all duration-500 hover:scale-110 active:scale-95 overflow-hidden
                    ${
                        theme === "dark"
                            ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 hover:shadow-yellow-500/50"
                            : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white hover:shadow-indigo-500/50"
                    }`}
            >
                <span className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl transition-transform duration-500 group-hover:rotate-180">
                        {theme === "dark" ? "☀️" : "🌙"}
                    </span>
                    <span>
                        {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
                    </span>
                </span>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === "dark"
                        ? "bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400"
                        : "bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                }`}></div>
            </button>
        </div>
    )
}

export default Button