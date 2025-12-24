import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const MainContent = (props) => {
  return (
    <div className='py-3 px-16 gap-10 flex item-center h-[90vh]'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default MainContent