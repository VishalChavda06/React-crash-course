import InlineStyleInfo from "./components/Style/InlineStyleInfo";
import DyanamicCondition from "./components/Style/DyanamicCondition";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

const LayoutPage=()=>{
    return(

        <>
           <div>
            Style Information and Freamwork Information
            <ul>
                <li>
                    <Link to="/inline-style-info">Inline Style Info</Link>
                </li>
                <li>
                    <Link to="/dyanamic-condition">Dyanamic Condition</Link>
                </li>
            </ul>
            
           </div>
           <Routes>
            <Route path="/inline-style-info" element={<InlineStyleInfo />} />
            <Route path="/dyanamic-condition" element={<DyanamicCondition />} />
           </Routes>
        </>
    )
}

export default LayoutPage