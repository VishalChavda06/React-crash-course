import React from 'react'

const RigtCardContent = (props) => {
  return (
    <div>
         <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-between p-8'>
            <h2 className='bg-white text-black text-2xl font-bold flex items-center justify-center w-12 h-12 rounded-full'>{props.id+1}</h2>
            <div>
                <p className='text-lg leading-normal text-white mb-10 font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis neque sint dolorum perspiciatis eum?</p>
                <div className='flex items-center gap-2'>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md'>{props.tag}</button>
                <button><i className="ri-arrow-right-line text-white text-2xl font-bold bg-blue-600 rounded-full p-2"></i></button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default RigtCardContent