import { Link } from "react-router-dom";
import { useState } from "react";
const CheckBoxInfo=()=>{

    const [sports , setSports]= useState([])

    const handleChange=(e)=>{
        console.log(e.target.value , e.target.checked)
        
        const {value , checked} = e.target
        if(checked){
            setSports([...sports, value])
        }else{
            setSports(sports.filter(sport => sport != value))
        }
    }
    return(
        <>
       
        <div className="relative">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600 absolute top-[-60px] left-120"> <Link to='/'>Back to 🔙</Link></button>
        </div>
        
        <div className="flex flex-col align-center justify-center gap-2 border border-gray-300 rounded-md p-4 w-[600px] mx-auto">
        <h2 className="text-2xl font-bold my-4 text-center">CheckBox Data : Choose Your Favorite Sports</h2>
            <div className="flex items-center gap-2">
                <label htmlFor="Cricket">Cricket</label>
                <input type="checkbox" id="Cricket"  onChange={handleChange} value="Cricket"/>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="Football">Football</label>
                <input type="checkbox" id="Football" onChange={handleChange} value="Football"/>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="Hockey">Hockey</label>
                <input type="checkbox" id="Hockey" onChange={handleChange} value="Hockey"/>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="Tennis">Tennis</label>
                <input type="checkbox" id="Tennis" onChange={handleChange} value="Tennis"/>
            </div>
            <div className="flex items-center gap-2">
                <label htmlFor="Basketball">Basketball</label>
                <input type="checkbox" id="Basketball" onChange={handleChange} value="Basketball"/>
            </div>
            <div>
            <h3 className="text-lg font-bold my-4 text-center">Selected Sports : {sports}</h3>
        </div>
        </div>

       
        </>
    )
}

export default CheckBoxInfo;