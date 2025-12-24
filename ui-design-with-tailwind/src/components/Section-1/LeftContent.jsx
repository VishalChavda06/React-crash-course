import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='w-1/3 flex flex-col justify-between h-full'>
        <HeroText/>
        <Arrow/>
    </div>
  )
}

export default LeftContent