import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from './Context/ThemeContext'
import Navbar from './components/Navbar'
import Button from './components/Button'

const App = () => {
  const { theme } = useContext(ThemeDataContext)

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="w-full flex-1 flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          {/* Hero Section */}
          <section className="text-center mb-16 sm:mb-20">
            <div className={`inline-block px-5 py-2.5 rounded-full text-sm font-semibold mb-8 transition-all duration-300 ${
              theme === "dark" 
                ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30" 
                : "bg-indigo-100 text-indigo-700 border border-indigo-200"
            }`}>
              React Context API
            </div>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 transition-all duration-300 ${
              theme === "dark" 
                ? "bg-gradient-to-r from-white via-gray-200 to-white text-transparent bg-clip-text" 
                : "bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-transparent bg-clip-text"
            }`}>
              Theme Switching Demo
            </h1>
            <p className={`text-xl sm:text-2xl mb-12 max-w-3xl mx-auto transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Experience seamless theme switching with React Context API. Watch the entire UI transform with a single click.
            </p>
            <Button />
          </section>

          {/* Cards Section */}
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
          <div className={`group relative p-10 sm:p-12 rounded-2xl transition-all duration-500 hover:scale-105 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50" 
              : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl shadow-gray-200/50"
          }`}>
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl transition-all duration-300 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20" 
                : "bg-gradient-to-br from-purple-100 to-pink-100"
            }`}>
              🎨
            </div>
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Theme Management
            </h3>
            <p className={`leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Switch between light and dark themes seamlessly using Context API with smooth transitions
            </p>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5" 
                : "bg-gradient-to-br from-purple-50/50 to-pink-50/50"
            }`}></div>
          </div>

          <div className={`group relative p-10 sm:p-12 rounded-2xl transition-all duration-500 hover:scale-105 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50" 
              : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl shadow-gray-200/50"
          }`}>
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl transition-all duration-300 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20" 
                : "bg-gradient-to-br from-yellow-100 to-orange-100"
            }`}>
              ⚡
            </div>
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              State Sharing
            </h3>
            <p className={`leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Share state across components without prop drilling. Clean and efficient state management
            </p>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-yellow-500/5 to-orange-500/5" 
                : "bg-gradient-to-br from-yellow-50/50 to-orange-50/50"
            }`}></div>
          </div>

          <div className={`group relative p-10 sm:p-12 rounded-2xl transition-all duration-500 hover:scale-105 ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50" 
              : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl shadow-gray-200/50"
          }`}>
            <div className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl transition-all duration-300 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-blue-500/20 to-cyan-500/20" 
                : "bg-gradient-to-br from-blue-100 to-cyan-100"
            }`}>
              🚀
            </div>
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Performance
            </h3>
            <p className={`leading-relaxed transition-colors duration-300 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              Efficient state management with smooth transitions and optimized re-renders
            </p>
            <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
              theme === "dark" 
                ? "bg-gradient-to-br from-blue-500/5 to-cyan-500/5" 
                : "bg-gradient-to-br from-blue-50/50 to-cyan-50/50"
            }`}></div>
          </div>
        </section>

          {/* Info Section */}
          <section className={`relative p-10 sm:p-12 lg:p-16 rounded-3xl transition-all duration-500 overflow-hidden ${
            theme === "dark" 
              ? "bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-2xl" 
              : "bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200 shadow-xl"
          }`}>
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 transition-all duration-500 ${
              theme === "dark" ? "bg-indigo-500" : "bg-indigo-300"
            }`}></div>
            <div className="relative z-10">
              <h2 className={`text-4xl sm:text-5xl font-bold mb-10 text-center transition-colors duration-300 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                How It Works
              </h2>
            <div className="space-y-6">
              <div className={`p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                theme === "dark" 
                  ? "bg-gray-700/50 backdrop-blur-sm border border-gray-600/50" 
                  : "bg-indigo-50/50 backdrop-blur-sm border border-indigo-100"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    theme === "dark" 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white" 
                      : "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                  }`}>
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                    }`}>
                      ThemeContext Provider
                    </h4>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      The ThemeContext wraps the entire app and provides theme state and toggle function to all child components through the Context API.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                theme === "dark" 
                  ? "bg-gray-700/50 backdrop-blur-sm border border-gray-600/50" 
                  : "bg-indigo-50/50 backdrop-blur-sm border border-indigo-100"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    theme === "dark" 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white" 
                      : "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                  }`}>
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                    }`}>
                      useContext Hook
                    </h4>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      Components use the useContext hook to access the theme state and update it when needed, eliminating prop drilling.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`p-8 sm:p-10 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                theme === "dark" 
                  ? "bg-gray-700/50 backdrop-blur-sm border border-gray-600/50" 
                  : "bg-indigo-50/50 backdrop-blur-sm border border-indigo-100"
              }`}>
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                    theme === "dark" 
                      ? "bg-gradient-to-br from-indigo-500 to-purple-500 text-white" 
                      : "bg-gradient-to-br from-indigo-500 to-purple-500 text-white"
                  }`}>
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 transition-colors duration-300 ${
                      theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                    }`}>
                      Dynamic Styling
                    </h4>
                    <p className={`leading-relaxed transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}>
                      All components dynamically adjust their styles based on the current theme value with smooth CSS transitions.
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className={`w-full py-10 text-center border-t transition-colors duration-300 ${
        theme === "dark" 
          ? "border-gray-800 text-gray-500" 
          : "border-gray-200 text-gray-500"
      }`}>
        <p className="text-sm">
          Built with <span className="font-semibold">React Context API</span> • Current Theme: <span className={`font-bold capitalize px-3 py-1.5 rounded ${
            theme === "dark" 
              ? "bg-yellow-500/20 text-yellow-300" 
              : "bg-indigo-100 text-indigo-700"
          }`}>{theme}</span>
        </p>
      </footer>
    </div>
  )
}

export default App