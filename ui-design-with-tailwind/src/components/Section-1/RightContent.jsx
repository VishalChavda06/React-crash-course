import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);
    return (
        
            <>
            <div className='w-2/3 p-6 flex flex-nowrap gap-4 overflow-x-auto'>
              {props.users.map((ele,index)=>{
                return <RightCard img={ele.img} tag={ele.tag} id={index} />
              })}
            </div>
            
            </>
       
    )
}

export default RightContent