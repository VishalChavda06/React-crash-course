import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  const productData = async () => {
    let response = await fetch("https://dummyjson.com/products")
    let dataPro = await response.json()
    setData(dataPro.products)
  }
  return (
    <>
      <div className='p-10'>
        <h1 className='text-3xl font-bold text-center'>
          API calling Info
        </h1>
        <button onClick={productData} className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer' >Get Data</button>
      </div>

      {/* Product List */}
      <div className='flex flex-wrap gap-10 px-10 py-4'>
        {data.length > 0 && data.map((elem, index) => {
          return (
            <div key={index} className='border-2 border-gray-300 p-4 w-[300px] rounded-md'>
              <div>
              <h1 className='text-medium text-center font-bold text-black'>{elem.title}</h1>
              <img src={elem.thumbnail} alt={elem.title} />
              </div>
              <div className='flex flex-col gap-2'>
                <p className='text-sm text-gray-500'>{elem.description}</p>
                <p className='text-sm text-black font-bold'> Price : {elem.price}</p>
                <p className='text-sm text-gray-500'> Rating : {elem.rating}</p>
                <p className='text-sm text-gray-500'> Stock : {elem.stock}</p>
                <p className='text-sm text-gray-500'> Brand : {elem.brand}</p>
                <p className='text-sm text-gray-500'> Category : {elem.category}</p>  
              </div>
            </div>
          )
        })}
      </div>
    </>

  )
}

export default App