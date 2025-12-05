import { Routes, Route, Link } from 'react-router-dom';
import Function from './components/Function';
import MoreInfo from './components/MoreInfo';
import Example from './components/Example';
import LoopsInfo from './components/Loops/LoopsInfo';
import UserInfo from './components/Loops/UserInfo';
import ClockInfo from './components/ClockColor-Demo/ClockInfo';
import CollageName from './components/Loops/NestedLoop/CollageName';

function App() {
  return (
    <>
      <h1>Hello React Crash Course</h1>
      <div>
        <Link to="/function" style={{marginRight: "10px"}}>Function</Link>
        <Link to="/moreinfo" style={{marginRight: "10px"}}>More Info</Link>
        <Link to="/example" style={{marginRight: "10px"}}>Example</Link>
        <Link to="/loopsinfo" style={{marginRight: "10px"}}>Loops Info</Link>
        <Link to="/userinfo" style={{marginRight: "10px"}}>Reuse Components Info</Link>
        <Link to="/clockinfo" style={{marginRight: "10px"}}>Clock Color Demo</Link>
        <Link to="/collagename" style={{marginRight: "10px"}}>Nested Lopps</Link>
      </div>

      <Routes>
        <Route path="/function" element={<Function />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/example" element={<Example />} />
        <Route path="/loopsinfo" element={<LoopsInfo />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path='/clockinfo' element={<ClockInfo />} />
        <Route path='/collagename' element={<CollageName />} />
      </Routes>

    
    </>
  )
}

export default App;
