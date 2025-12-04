import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Link } from 'react-router-dom'
import Condition1 from './components/Condition1'
import ArrayCondition from './components/ArrayCondition'
import BettryCheck from './components/BettryCheck'
function App() {

  return (
    <>

      <h1>Multiple Condition Information</h1>

     <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}}>
     <button>
        <Link to="/condition1" className='text-white'>Condition 1</Link>
      </button> 
      <button>
        <Link to="/arraycondition" className='text-white'>Array Condition</Link>
      </button>
      <button>
        <Link to="/bettrycheck" className='text-white'>Bettry Check Condition</Link>
      </button>
     </div>
      
      <Routes>
        <Route path="/condition1" element={<Condition1 />} />
        <Route path="/arraycondition" element={<ArrayCondition />} />
        <Route path="/bettrycheck" element={<BettryCheck />} />
      </Routes>

    </>
  )
}

export default App
