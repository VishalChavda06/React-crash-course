import React from 'react'
import Section1Page from './components/Section-1/Section1Page'
import Section2Page from './components/Section-2/Section2Page'

const App = () => {
 
  const users=[
    {
      img:'https://images.unsplash.com/photo-1555788114-fe770b9ab930?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1683609553620-d85c01bc2ba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Neutral'
    },
    {
      img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?q=80&w=1359&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1683609553620-d85c01bc2ba5?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Neutral'
    }
  ]
   
  return (
    <>
      <Section1Page users={users} />
      <Section2Page />
    </>
  )
}

export default App