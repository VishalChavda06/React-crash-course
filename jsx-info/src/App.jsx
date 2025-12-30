import { Routes, Route, Link } from 'react-router-dom';
import Function from './components/Function';
import MoreInfo from './components/MoreInfo';
import Example from './components/Example';
import LoopsInfo from './components/Loops/LoopsInfo';
import UserInfo from './components/Loops/UserInfo';
import ClockInfo from './components/ClockColor-Demo/ClockInfo';
import CollageName from './components/Loops/NestedLoop/CollageName';
import ConditionalRendering from './components/ConditionalRendering';
import EventHandling from './components/EventHandling';
import StylingExamples from './components/StylingExamples';
import FormsInJSX from './components/FormsInJSX';
import FragmentsExample from './components/FragmentsExample';
import DynamicAttributes from './components/DynamicAttributes';
import AdvancedJSX from './components/AdvancedJSX';

function App() {
  return (
    <>
      <h1>Hello React Crash Course</h1>
      <div style={{padding: "20px", background: "#f5f5f5", borderRadius: "8px", marginBottom: "20px"}}>
        <h2 style={{marginBottom: "15px"}}>Basic Examples:</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "15px"}}>
          <Link to="/function" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Function</Link>
          <Link to="/moreinfo" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>More Info</Link>
          <Link to="/example" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Example</Link>
          <Link to="/loopsinfo" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Loops Info</Link>
          <Link to="/userinfo" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Reuse Components</Link>
          <Link to="/clockinfo" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Clock Demo</Link>
          <Link to="/collagename" style={{padding: "8px 16px", background: "#2196F3", color: "white", textDecoration: "none", borderRadius: "5px"}}>Nested Loops</Link>
        </div>
        
        <h2 style={{marginBottom: "15px", marginTop: "20px"}}>Advanced Examples:</h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
          <Link to="/conditional" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Conditional Rendering</Link>
          <Link to="/events" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Event Handling</Link>
          <Link to="/styling" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Styling</Link>
          <Link to="/forms" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Forms</Link>
          <Link to="/fragments" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Fragments</Link>
          <Link to="/dynamic" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Dynamic Attributes</Link>
          <Link to="/advanced" style={{padding: "8px 16px", background: "#4CAF50", color: "white", textDecoration: "none", borderRadius: "5px"}}>Advanced JSX</Link>
        </div>
      </div>

      <Routes>
        <Route path="/function" element={<Function />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/example" element={<Example />} />
        <Route path="/loopsinfo" element={<LoopsInfo />} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path='/clockinfo' element={<ClockInfo />} />
        <Route path='/collagename' element={<CollageName />} />
        <Route path='/conditional' element={<ConditionalRendering />} />
        <Route path='/events' element={<EventHandling />} />
        <Route path='/styling' element={<StylingExamples />} />
        <Route path='/forms' element={<FormsInJSX />} />
        <Route path='/fragments' element={<FragmentsExample />} />
        <Route path='/dynamic' element={<DynamicAttributes />} />
        <Route path='/advanced' element={<AdvancedJSX />} />
      </Routes>

    
    </>
  )
}

export default App;
