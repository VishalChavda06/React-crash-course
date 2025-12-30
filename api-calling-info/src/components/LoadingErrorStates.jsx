import React, { useState } from 'react'

const LoadingErrorStates = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    
    try {
      let response = await fetch("https://dummyjson.com/users")
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      let result = await response.json()
      setData(result.users)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching users:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 2: Loading & Error States</h2>
      <button 
        onClick={fetchUsers} 
        disabled={loading}
        className='bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-md cursor-pointer transition-colors mb-4 disabled:cursor-not-allowed'
      >
        {loading ? 'Loading...' : 'Fetch Users'}
      </button>

      {loading && (
        <div className='text-center py-8'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500'></div>
          <p className='mt-4 text-gray-600'>Loading users...</p>
        </div>
      )}

      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
          <p className='font-bold'>Error:</p>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {data.slice(0, 9).map((user) => (
            <div key={user.id} className='border-2 border-gray-300 p-4 rounded-md hover:shadow-md transition-shadow'>
              <div className='flex items-center gap-3 mb-2'>
                <img src={user.image} alt={user.firstName} className='w-12 h-12 rounded-full' />
                <div>
                  <h3 className='font-bold text-black'>{user.firstName} {user.lastName}</h3>
                  <p className='text-sm text-gray-500'>{user.email}</p>
                </div>
              </div>
              <p className='text-sm text-gray-600'>Age: {user.age}</p>
              <p className='text-sm text-gray-600'>Phone: {user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LoadingErrorStates


