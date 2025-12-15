import { Routes, Route, Link } from 'react-router-dom'
import UseEffectInfo from './UseEffectHook/UseEffectInfo'
import SideEffectInfo from './UseEffectHook/SideEffectInfo'
import LifeCycle from './ComponentLifecycle/LifeCycle'
import UseRefInfo from './UseRef/UseRefInfo'

const LayoutPage = () => {
  return (
    <>
      <div className='flex gap-2 justify-center mt-3' >
        <button className='bg-blue-500 text-white p-2 rounded-md'>
          <Link to="/use-effect-info">UseEffectInfo</Link>
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md'>
          <Link to="/side-effect-info">SideEffectInfo</Link>
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md'>
          <Link to="/life-cycle">LifeCycle</Link>
        </button>
        <button className='bg-blue-500 text-white p-2 rounded-md'>
          <Link to="/use-ref-info">UseRefInfo</Link>
        </button>
      </div>

      <Routes>
        <Route path="/use-effect-info" element={<UseEffectInfo />} />
        <Route path="/side-effect-info" element={<SideEffectInfo />} />
        <Route path="/life-cycle" element={<LifeCycle />} />
        <Route path="/use-ref-info" element={<UseRefInfo />} />
      </Routes>
    </>
  )
}

export default LayoutPage
