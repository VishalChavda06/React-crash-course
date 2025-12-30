import React, { useState, useEffect } from 'react'

const UseEffectFetch = () => {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://dummyjson.com/quotes?limit=10')
        
        if (!response.ok) {
          throw new Error('Failed to fetch quotes')
        }
        
        const data = await response.json()
        setQuotes(data.quotes)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchQuotes()
  }, []) // Empty dependency array means this runs once on mount

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 4: useEffect Auto-Fetch</h2>
      <p className='text-sm text-gray-600 mb-4'>This data is automatically fetched when the component mounts</p>

      {loading && (
        <div className='text-center py-8'>
          <div className='inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
          <p className='mt-4 text-gray-600'>Loading quotes...</p>
        </div>
      )}

      {error && (
        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {!loading && !error && (
        <div className='space-y-4'>
          {quotes.map((quote) => (
            <div key={quote.id} className='border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded'>
              <p className='text-gray-800 italic'>"{quote.quote}"</p>
              <p className='text-sm text-gray-600 mt-2'>— {quote.author}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UseEffectFetch


