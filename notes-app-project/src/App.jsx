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
      createdAt: new Date().toLocaleDateString()
    }

    setTasks([...tasks, newTask])
    setTitle('')
    setDescription('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white'>
        <div className='container mx-auto px-4 py-8'>
          <div className='text-center mb-8'>
            <h1 className='text-5xl font-bold mb-2 text-white'>
              📝 Notes App
            </h1>
            <p className='text-gray-300'>Organize your thoughts and ideas</p>
          </div>

          <div className='grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto'>
            {/* Form Section */}
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20'>
              <h2 className='text-3xl font-bold mb-6 text-white'>Add New Note</h2>
              <form onSubmit={formHandler} className='space-y-6'>
                {/* Title Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Note Title
                  </label>
                  <input
                    type="text"
                    placeholder='Enter your note heading...'
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white placeholder-gray-400'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* Description Input */}
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-2'>
                    Note Description
                  </label>
                  <textarea
                    placeholder='Enter your note description...'
                    rows="6"
                    className='w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all text-white placeholder-gray-400 resize-none'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className='w-full bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-white/50 flex items-center justify-center gap-2'
                >
                  <span>Add Note</span>
                  <span>🗒️</span>
                </button>
              </form>
            </div>

            {/* Notes Section */}
            <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20'>
              <div className='flex items-center justify-between mb-6'>
                <h2 className='text-3xl font-bold text-white'>
                  Your Notes
                </h2>
                <span className='bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium'>
                  {tasks.length} {tasks.length === 1 ? 'Note' : 'Notes'}
                </span>
              </div>

              <div className='max-h-[600px] overflow-y-auto pr-2 custom-scrollbar'>
                {tasks.length === 0 ? (
                  <div className='text-center py-16'>
                    <div className='text-6xl mb-4'>📭</div>
                    <p className='text-gray-400 text-lg'>No notes yet. Create your first note!</p>
                  </div>
                ) : (
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {tasks.map((task) => (
                      <div
                        key={task.id}
                        className='bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:scale-105 group relative'
                      >
                        {/* Delete Button */}
                        <button
                          onClick={() => deleteTask(task.id)}
                          className='absolute top-3 right-3 bg-black/80 hover:bg-black text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:scale-110 transform border border-white/30'
                          aria-label='Delete note'
                        >
                          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' />
                          </svg>
                        </button>

                        {/* Note Content */}
                        <div className='pr-8'>
                          <h3 className='text-xl font-bold text-white mb-2 line-clamp-2'>
                            {task.title}
                          </h3>
                          <p className='text-gray-200 text-sm line-clamp-4 mb-3'>
                            {task.description}
                          </p>
                          <span className='text-xs text-gray-400'>
                            Created: {task.createdAt}
                          </span>
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
    </>
  )
}

export default App