import React, { useState } from 'react'

const PromiseThen = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(false)

  // Using .then() instead of async/await
  const fetchComments = () => {
    setLoading(true)
    
    fetch('https://dummyjson.com/comments?limit=10')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then(data => {
        setComments(data.comments)
      })
      .catch(error => {
        console.error('Error fetching comments:', error)
        alert('Failed to fetch comments: ' + error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 7: Promise.then() Pattern</h2>
      <p className='text-sm text-gray-600 mb-4'>Alternative to async/await using .then() and .catch()</p>
      
      <button
        onClick={fetchComments}
        disabled={loading}
        className='bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md transition-colors disabled:cursor-not-allowed mb-4'
      >
        {loading ? 'Loading...' : 'Fetch Comments'}
      </button>

      {loading && (
        <div className='text-center py-8'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500'></div>
        </div>
      )}

      {!loading && comments.length > 0 && (
        <div className='space-y-3'>
          {comments.map((comment) => (
            <div key={comment.id} className='border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50 rounded'>
              <p className='text-gray-800'>{comment.body}</p>
              <div className='flex items-center gap-2 mt-2'>
                <p className='text-sm font-semibold text-gray-700'>{comment.user.username}</p>
                <span className='text-xs text-gray-500'>•</span>
                <p className='text-xs text-gray-500'>{comment.postId} likes</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PromiseThen


