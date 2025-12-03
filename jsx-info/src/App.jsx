import { Routes, Route, Link } from 'react-router-dom';
import Function from './components/Function';
import MoreInfo from './components/MoreInfo';
import Example from './components/Example';

function App() {
  return (
    <>
      <h1>Hello React Crash Course</h1>

      <Routes>
        <Route path="/function" element={<Function />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/example" element={<Example />} />
      </Routes>

      <div>
        <Link to="/function" style={{marginRight: "10px"}}>Function</Link>
        <Link to="/moreinfo" style={{marginRight: "10px"}}>More Info</Link>
        <Link to="/example" style={{marginRight: "10px"}}>Example</Link>
      </div>
    </>
  )
}

export default App;
