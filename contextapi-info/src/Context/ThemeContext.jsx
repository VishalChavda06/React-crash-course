import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeDataContext = createContext()

const ThemeContext = (props) => {
  const [theme, setTheme] = useState("light")
  
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }
  
  return (
    <ThemeDataContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div className={theme === "dark" ? "dark" : ""}>
        <div className={`min-h-screen transition-all duration-500 relative overflow-hidden ${
          theme === "dark" 
            ? "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-gray-100" 
            : "bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900"
        }`}>
          {/* Animated background elements */}
          <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
            theme === "dark" ? "opacity-30" : "opacity-10"
          }`}>
            <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
              theme === "dark" ? "bg-indigo-500/20" : "bg-indigo-300/30"
            }`}></div>
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-all duration-1000 ${
              theme === "dark" ? "bg-purple-500/20" : "bg-purple-300/30"
            }`}></div>
          </div>
          <div className="relative z-0">
            {props.children}
          </div>
        </div>
      </div>
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext