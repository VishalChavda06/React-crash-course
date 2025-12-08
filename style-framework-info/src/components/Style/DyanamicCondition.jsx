import { Link } from "react-router-dom";
import { useState } from "react";
const DyanamicCondition=()=>{

    const [img , setImg]= useState({
        borderRadius:'20px',
        padding:'10px',
        width:'420px',
        height:'100%',
        transition:'all 0.6s ease-in-out',
    })

    const imgHandler=(bgColor , width)=>{
      console.log(bgColor , width);
      setImg({...img, backgroundColor:bgColor, width:width});
    }
    

    return(
        <>
        <div>
            <Link to="/">Home</Link>
           
            <div>
            <h1>Dyanamic Condition style </h1>
            <div>
                <img src="https://cdn-icons-png.freepik.com/512/219/219988.png" alt="" style={img} />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <button onClick={()=>imgHandler('red' , '420px')}>Normal image</button> 
                    <button onClick={()=>imgHandler('blue' , '480px')}>Change image</button>
                </div>
                </div>  
            </div>
        </div>

        </>
    )
}
export default DyanamicCondition;