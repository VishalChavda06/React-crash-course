import React from 'react'
import { useState } from 'react'


const App = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState()

  const [taks, setTaks] = useState([])

  const formHandler = (e) => {

    e.preventDefault();
    console.log(title, description)

    setTaks([...taks, {title, description}])

    setTitle('')
    setDescription('')
  }

  return (
    <>
      <div className='bg-black text-white h-screen flex justify-around p-10 '>
        {/* Form Section */}
        <div>
          <h1 className='text-2xl font-bold ps-12' >Add Note</h1>
          <form onSubmit={formHandler}>
            <div className='flex flex-col gap-8 flex p-10  rounded-md w-[600px]'>
              {/* Title Input */}
              <input type="text"
                placeholder='Enter Your Note Heading'
                className='border-2 px-4 py-3 outline-none rounded-md'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <textarea name=""
                id=""
                placeholder='Enter Your Note Description'
                className='border-2 px-4 py-3 outline-none rounded-md'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button className='bg-white text-black px-4 py-3 rounded-md hover:cursor-pointer hover:bg-gray-100'>Add Note 🗒️</button>
            </div>
          </form>
        </div>
        {/* Notes Section */}
        <div className='p-10  rounded-md w-[900px] overflow-y-auto' >
          <h1 className='text-2xl font-bold' >Your Notes</h1>
          <div className='flex flex-wrap gap-7 mt-10'>
            {taks.map((task) => (
              <div className='border-2 border-white rounded-md p-4 w-[200px] h-[200px] leading-tight'>
                <h1 className='text-lg font-bold '>{task.title}</h1>
                <p className='text-sm'>{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App