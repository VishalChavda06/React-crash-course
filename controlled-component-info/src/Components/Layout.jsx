
import { Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>

      <div className='flex justify-center'>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/formcontroll">Form Controlled</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/checkboxinfo">CheckBox Information</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/radioinfo">Radio & Dropdown Information</Link>
        </button>
      </div>



    </>
  )
}
export default Layout;