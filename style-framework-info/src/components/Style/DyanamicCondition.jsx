import { Link } from "react-router-dom";
import { useState } from "react";
const DyanamicCondition=()=>{

    const [img , setImg]= useState({
        borderRadius:'20px',
        padding:'10px',
        width:'420px',
        height:'100%',
        transition:'all 0.9s ease-in-out',
    })

    const [textColor , setTextColor] = useState('white')
    const [buttonColor , setButtonColor] = useState('black')

    const imgHandler=(bgColor , width , textColor , buttonColor)=>{
      console.log(bgColor , width);
      setImg({...img, backgroundColor:bgColor, width:width});
      setTextColor(textColor);
      setButtonColor(buttonColor);
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
                    <p style={{color: textColor}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                    <button onClick={()=>imgHandler('black' , '400px' , 'green' , 'red')} style={{backgroundColor: buttonColor}} >Normal image</button> 
                    <button onClick={()=>imgHandler('white' , '450px' , 'yellow' , 'green')} style={{backgroundColor: buttonColor}}>Change image</button>
                </div>
                </div>  
            </div>
        </div>

        </>
    )
}
export default DyanamicCondition;