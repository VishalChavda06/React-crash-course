import {useState} from "react"
const ConditionBase=()=>{

    const [active , setActive]= useState(false)

    return(
        <>
        <h1>Condition Base Style</h1>
        <button onClick={()=> setActive(!active)} style={{backgroundColor: active ? "green" : "red" , color:"white"}}>Toggle Color with Condition Base</button>
        {
            active ? 
            <p>The color is green</p>
            :
            <p>The color is red</p>
        }

        </>
    )
}

export default ConditionBase