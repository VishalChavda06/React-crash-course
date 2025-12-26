import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [userdata, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const res = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setUserData(res.data)
  }

  useEffect(() => {
    getData()
  }, [index])


  return (
    <>
      <div className='bg-black text-white h-screen px-10'>
        <h1 className='text-3xl font-bold text-center p-10'>Gallary App</h1>

        <div className='flex flex-wrap gap-10 py-10  '>
          {!userdata && <><h3>Loading...</h3></>} {userdata.length > 0 && userdata.map((ele, index) => {
            return (
              <a href={ele.url} target='_blank' rel='noopener noreferrer'>
                <div key={index} className='w-[300px] h-[300px] '>
                  <img src={ele.download_url} alt="" className='w-full h-full object-cover rounded-xl' />
                  <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold text-center'>{ele.author}</h1>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
        <div className='flex justify-center items-center gap-10'>
          <button onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
            }
          }} className='bg-blue-400 text-white p-4 rounded-xl cursor-pointer'>Prev</button> <span>Page {index}</span>
          <button onClick={() => {
            setIndex(index + 1)
          }} className='bg-blue-400 text-white p-4 rounded-xl cursor-pointer'>Next</button>
        </div>
      </div>



    </>
  )
}

export default App