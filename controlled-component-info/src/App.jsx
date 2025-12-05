import './App.css'
import Layout from './Components/Layout'
import { Routes, Route } from 'react-router-dom'
import FormControll from './Components/Controlled-info/FormControll'
import CheckBoxInfo from './Components/CheckBox-Handle/Checkbox-info'
import RadioInfo from './Components/Handle-Radio&DropDown/RadioInfo'

function App() {

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Controlled Component</h1>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/formcontroll" element={<FormControll />} />
        <Route path="/checkboxinfo" element={<CheckBoxInfo />} />
        <Route path="/radioinfo" element={<RadioInfo />} />
      </Routes>
    </>
  )
}

export default App
