import React, { useState } from 'react'

const BasicFetch = () => {
  const [data, setData] = useState([])

  const productData = async () => {
    let response = await fetch("https://dummyjson.com/products")
    let dataPro = await response.json()
    setData(dataPro.products)
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <h2 className='text-2xl font-bold mb-4 text-gray-800'>Example 1: Basic GET Request</h2>
      <button 
        onClick={productData} 
        className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer transition-colors mb-4'
      >
        Get Products
      </button>

      <div className='flex flex-wrap gap-4'>
        {data.length > 0 && data.slice(0, 6).map((elem) => (
          <div key={elem.id} className='border-2 border-gray-300 p-4 w-[300px] rounded-md hover:shadow-md transition-shadow'>
            <h3 className='text-lg font-bold text-center mb-2 text-black'>{elem.title}</h3>
            <img src={elem.thumbnail} alt={elem.title} className='w-full h-48 object-cover rounded mb-2' />
            <div className='flex flex-col gap-2'>
              <p className='text-sm text-gray-500 line-clamp-2'>{elem.description}</p>
              <p className='text-sm text-black font-bold'>Price: ${elem.price}</p>
              <p className='text-sm text-gray-500'>Rating: {elem.rating} ⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BasicFetch

