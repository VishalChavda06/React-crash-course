import React from 'react'
import BasicFetch from './components/BasicFetch'
import LoadingErrorStates from './components/LoadingErrorStates'
import PostRequest from './components/PostRequest'
import UseEffectFetch from './components/UseEffectFetch'
import SearchFilter from './components/SearchFilter'
import MultipleAPIs from './components/MultipleAPIs'
import PromiseThen from './components/PromiseThen'

const App = () => {
  return (
    <div className='min-h-screen bg-linear-to-br from-gray-100 to-gray-200 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-3'>
            🌐 API Calling Examples
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Comprehensive examples of different API calling patterns in React
          </p>
        </div>

        {/* Examples Grid */}
        <div className='space-y-8'>
          <BasicFetch />
          <LoadingErrorStates />
          <PostRequest />
          <UseEffectFetch />
          <SearchFilter />
          <MultipleAPIs />
          <PromiseThen />
        </div>

        {/* Footer Info */}
        <div className='mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200'>
          <h3 className='text-xl font-bold text-blue-800 mb-3'>📚 Key Concepts Covered:</h3>
          <ul className='grid md:grid-cols-2 gap-2 text-gray-700'>
            <li>✅ Basic GET requests with async/await</li>
            <li>✅ Loading states and error handling</li>
            <li>✅ POST requests with form data</li>
            <li>✅ useEffect for automatic data fetching</li>
            <li>✅ Search and filter functionality</li>
            <li>✅ Multiple API calls (sequential & parallel)</li>
            <li>✅ Promise.then() pattern alternative</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
