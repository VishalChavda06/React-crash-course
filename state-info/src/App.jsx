import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Counter from './components/Counter'
import NameState from './components/NameState'
import Toggle from './components/Toggle'

function App() {

  return (
    <>
     {/* State Information */}
     <h1 className='text-2xl font-bold text-center my-4'>State Informations</h1>
     <div className='flex justify-center items-center'>
      <Link to="/counter" className='text-blue-500 hover:text-blue-700 border-2 border-blue-500 rounded-md p-2 mx-3 hover:bg-blue-500 hover:text-white' >Counter</Link>
      <Link to="/name" className='text-blue-500 border-2 border-blue-500 rounded-md p-2 mx-3 hover:bg-blue-500 hover:text-white' >Name</Link> 
      <Link to="/toggle" className='text-blue-500 border-2 border-blue-500 rounded-md p-2 mx-3 hover:bg-blue-500 hover:text-white' >Toggle</Link>
     </div>
    


    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/counter" element={<Counter />} />
      <Route path="/name" element={<NameState />} />
      <Route path="/toggle" element={<Toggle />} />
    </Routes>
     

    </>
  )
}

export default App
