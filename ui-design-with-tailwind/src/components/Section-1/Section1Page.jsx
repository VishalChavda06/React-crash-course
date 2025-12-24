import React from 'react'
import Navbar from './Navbar'
import MainContent from './MainContent'

const Section1Page = (props) => {
  console.log(props.users);
  return (
    <div className='h-screen w-full'>
        <Navbar/>
        <MainContent users={props.users}/>
    </div>
  )
}

export default Section1Page