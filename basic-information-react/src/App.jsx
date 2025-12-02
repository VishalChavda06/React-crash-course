import './App.css'
import Header from './Header'
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1>Hello I'm Vishal Chavda</h1>
      <p>I'm a web developer</p>

      {/* Number Increment  */}
      <h1>Number Increment & Decrement</h1>
      <h3>Count :{count}</h3>
      <button onClick={()=> setCount(count +1)}>Increment</button>
      <button onClick={()=> setCount(count -1)}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>

      {/* Component  */}
      <h1>Component Communication</h1>
      <Apple/>
    </>
  )
}


// component make 
const Apple=()=>{
  return(
    <>
    <p>Apple is a fruit</p>
    </>
  )
}

export default App
