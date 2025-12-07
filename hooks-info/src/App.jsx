import './App.css'
import { Routes, Route } from 'react-router-dom'
import LayoutPage from './components/LayoutPage'

function App() {

  return (

    <>
    <div>
      <h1>Hooks Informations</h1>
    </div>
     <Routes> 
      <Route path="*" element={<LayoutPage />} />
     </Routes>
    </>
  )
}

export default App
