import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserInfo from './components/UserInfo'
import './App.css'
import BasicInfo from './components/BasicInfo'
import ProductInfo from './components/Products/ProductInfo'
import SellerCard from './components/Project/SellerCard'

function App() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Props Information</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/basicinfo">Basic Info</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/usercard">User Card</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/productinfo">Product Info</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/sellercard">Seller Card</Link>
        </button>
      </div>

      <div>
        <Routes>
          <Route path="/usercard" element={<UserInfo />} />
          <Route path="/basicinfo" element={<BasicInfo />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/sellercard" element={<SellerCard />} />
        </Routes>
      </div>
    </>
  )
}

export default App
