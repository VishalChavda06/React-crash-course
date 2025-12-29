import React, { useState } from 'react'

const MultipleAPIs = () => {
  const [todos, setTodos] = useState([])
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState({ todos: false, posts: false })

  // Fetch todos
  const fetchTodos = async () => {
    setLoading(prev => ({ ...prev, todos: true }))
    try {
      const response = await fetch('https://dummyjson.com/todos?limit=5')
      const data = await response.json()
      setTodos(data.todos)
    } catch (error) {
      console.error('Error fetching todos:', error)
    } finally {
      setLoading(prev => ({ ...prev, todos: false }))
    }
  }

  // Fetch posts
  const fetchPosts = async () => {
    setLoading(prev => ({ ...prev, posts: true }))
    try {
      const response = await fetch('https://dummyjson.com/posts?limit=5')
      const data = await response.json()
      setPosts(data.posts)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(prev => ({ ...prev, posts: false }))
    }
  }

  // Fetch both simultaneously using Promise.all
  const fetchBoth = async () => {
    setLoading({ todos: true, posts: true })
    try {
      const [todosResponse, postsResponse] = await Promise.all([
        fetch('https://dummyjson.com/todos?limit=5'),
        fetch('https://dummyjson.com/posts?limit=5')
      ])

      const todosData = await todosResponse.json()
      const postsData = await postsResponse.json()

      setTodos(todosData.todos)
      setPosts(postsData.posts)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading({ todos: false, posts: false })
    }
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 6: Multiple API Calls</h2>
      
      <div className='flex gap-2 mb-6'>
        <button
          onClick={fetchTodos}
          disabled={loading.todos}
          className='bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors disabled:cursor-not-allowed'
        >
          {loading.todos ? 'Loading...' : 'Fetch Todos'}
        </button>
        
        <button
          onClick={fetchPosts}
          disabled={loading.posts}
          className='bg-pink-500 hover:bg-pink-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors disabled:cursor-not-allowed'
        >
          {loading.posts ? 'Loading...' : 'Fetch Posts'}
        </button>
        
        <button
          onClick={fetchBoth}
          disabled={loading.todos || loading.posts}
          className='bg-teal-500 hover:bg-teal-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors disabled:cursor-not-allowed'
        >
          Fetch Both (Promise.all)
        </button>
      </div>

      <div className='grid md:grid-cols-2 gap-6'>
        {/* Todos Section */}
        <div>
          <h3 className='text-xl font-bold mb-3 text-indigo-600'>Todos ({todos.length})</h3>
          {loading.todos ? (
            <div className='text-center py-4'>
              <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500'></div>
            </div>
          ) : (
            <div className='space-y-2'>
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <div key={todo.id} className='border border-gray-300 p-3 rounded-md'>
                    <div className='flex items-center gap-2'>
                      <input type="checkbox" checked={todo.completed} readOnly className='cursor-pointer' />
                      <p className={todo.completed ? 'line-through text-gray-500' : 'text-black'}>
                        {todo.todo}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className='text-gray-500 text-center py-4'>No todos loaded</p>
              )}
            </div>
          )}
        </div>

        {/* Posts Section */}
        <div>
          <h3 className='text-xl font-bold mb-3 text-pink-600'>Posts ({posts.length})</h3>
          {loading.posts ? (
            <div className='text-center py-4'>
              <div className='inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pink-500'></div>
            </div>
          ) : (
            <div className='space-y-3'>
              {posts.length > 0 ? (
                posts.map((post) => (
                  <div key={post.id} className='border border-gray-300 p-3 rounded-md'>
                    <h4 className='font-bold text-black mb-1'>{post.title}</h4>
                    <p className='text-sm text-gray-600 line-clamp-2'>{post.body}</p>
                    <p className='text-xs text-gray-500 mt-2'>Tags: {post.tags.join(', ')}</p>
                  </div>
                ))
              ) : (
                <p className='text-gray-500 text-center py-4'>No posts loaded</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MultipleAPIs

