import React from 'react'
import RigtCardContent from './RigtCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'>
        <img className='w-full h-full object-cover'src={props.img} alt="" />
       <RigtCardContent tag={props.tag} id={props.id}/>
    </div>
  )
}

export default RightCard