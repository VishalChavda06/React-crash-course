import React, { useState } from 'react'

const PostRequest = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [userId, setUserId] = useState(1)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: userId,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create post')
      }

      const data = await response.json()
      setResult(data)
      setTitle('')
      setBody('')
    } catch (error) {
      setResult({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 3: POST Request</h2>
      
      <form onSubmit={handleSubmit} className='space-y-4 mb-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>User ID:</label>
          <input
            type="number"
            value={userId}
            onChange={(e) => setUserId(Number(e.target.value))}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            min="1"
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>
        
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Body:</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows="4"
            className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className='bg-purple-500 hover:bg-purple-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors disabled:cursor-not-allowed'
        >
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {result && (
        <div className={`p-4 rounded-md ${result.error ? 'bg-red-100 border border-red-400 text-red-700' : 'bg-green-100 border border-green-400 text-green-700'}`}>
          {result.error ? (
            <p><strong>Error:</strong> {result.error}</p>
          ) : (
            <div>
              <p><strong>Post Created Successfully!</strong></p>
              <p className='mt-2'><strong>ID:</strong> {result.id}</p>
              <p><strong>Title:</strong> {result.title}</p>
              <p><strong>Body:</strong> {result.body}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PostRequest

