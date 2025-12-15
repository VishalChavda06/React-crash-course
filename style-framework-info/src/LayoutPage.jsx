import InlineStyleInfo from "./components/Style/InlineStyleInfo";
import DyanamicCondition from "./components/Style/DyanamicCondition";
import ConditionBase from "./components/Style/ConditionBase";
import GridFormat from "./components/Style/GridFormat";
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
                <li>
                    <Link to="/condition-base">Condition Base</Link>
                </li>
                <li>
                    <Link to="/grid-format">Grid Format</Link>
                </li>
            </ul>
            
           </div>
           <Routes>
            <Route path="/inline-style-info" element={<InlineStyleInfo />} />
            <Route path="/dyanamic-condition" element={<DyanamicCondition />} />
            <Route path="/condition-base" element={<ConditionBase />} />
            <Route path="/grid-format" element={<GridFormat />} />
           </Routes>
        </>
    )
}

export default LayoutPage