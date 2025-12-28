import React from 'react'
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tasks, setTasks] = useState([])

  const formHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    setTasks([...tasks, newTask])
    setTitle('')
    setDescription('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000'></div>
      </div>

      <div className='relative z-10 min-h-screen flex flex-col justify-center items-center'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
          {/* Header Section */}
          <div className='text-center mb-10 sm:mb-12'>
            <div className='inline-block mb-4'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-3 bg-linear-to-r from-white via-purple-200 to-white text-transparent bg-clip-text'>
                📝 Notes App
              </h1>
            </div>
            <p className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto'>
              Organize your thoughts and ideas with style
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-6 lg:gap-8 w-full'>
          {/* Form Section */}
          <div className='bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 rounded-xl bg-linear-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center text-2xl'>
                ✍️
              </div>
              <h2 className='text-2xl sm:text-3xl font-bold text-white'>Add New Note</h2>
            </div>
            
            <form onSubmit={formHandler} className='space-y-5'>
              {/* Title Input */}
              <div>
                <label className='block text-sm font-semibold text-gray-200 mb-2.5'>
                  Note Title
                </label>
                <input
                  type="text"
                  placeholder='Enter your note heading...'
                  className='w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400/50 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Description Input */}
              <div>
                <label className='block text-sm font-semibold text-gray-200 mb-2.5'>
                  Note Description
                </label>
                <textarea
                  placeholder='Enter your note description...'
                  rows="6"
                  className='w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400/50 transition-all duration-300 text-white placeholder-gray-400 resize-none backdrop-blur-sm'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className='w-full bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold px-6 py-4 rounded-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 text-lg'
              >
                <span>Add Note</span>
                <span className='text-xl'>🗒️</span>
              </button>
            </form>
          </div>

          {/* Notes Section */}
          <div className='bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300'>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-2xl'>
                  📋
                </div>
                <h2 className='text-2xl sm:text-3xl font-bold text-white'>
                  Your Notes
                </h2>
              </div>
              <span className='bg-linear-to-r from-purple-500/30 to-blue-500/30 text-white px-4 py-2 rounded-full text-sm font-bold border border-white/20'>
                {tasks.length} {tasks.length === 1 ? 'Note' : 'Notes'}
              </span>
            </div>

            <div className='max-h-[600px] overflow-y-auto pr-2 custom-scrollbar'>
              {tasks.length === 0 ? (
                <div className='text-center py-16 sm:py-20'>
                  <div className='text-7xl sm:text-8xl mb-6 animate-bounce'>📭</div>
                  <p className='text-gray-300 text-lg sm:text-xl font-medium mb-2'>No notes yet</p>
                  <p className='text-gray-400 text-sm sm:text-base'>Create your first note to get started!</p>
                </div>
              ) : (
                <div className='space-y-4'>
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className='group relative bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:scale-[1.02]'
                    >
                      {/* Delete Button */}
                      <button
                        onClick={() => deleteTask(task.id)}
                        className='absolute top-4 right-4 bg-red-500/80 hover:bg-red-500 text-white p-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 transform border border-red-400/50 shadow-lg'
                        aria-label='Delete note'
                      >
                        <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                        </svg>
                      </button>

                      {/* Note Content */}
                      <div className='pr-12'>
                        <h3 className='text-xl sm:text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-200 transition-colors'>
                          {task.title}
                        </h3>
                        <p className='text-gray-200 text-sm sm:text-base mb-4 line-clamp-4 leading-relaxed'>
                          {task.description}
                        </p>
                        <div className='flex items-center gap-2'>
                          <span className='text-xs sm:text-sm text-gray-400 flex items-center gap-1.5'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                            </svg>
                            {task.createdAt}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App