import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const SideEffectInfo=()=>{

    const [count , setCount] = useState(0)
    const [name , setName] = useState("")


    
    /* 
     Life Cycle of useEffect 
     1: useEffect(()=>{
        //this code will run on mount
        })

    2 : useEffect(()=>{
        //this code will run on update
        } ,[statel and  props])
         
    3 : useEffect(()=>{
        return()=>{
            //this code will run on unmount
            }
        })
    4 : useEffect(()=>{
        //This code will run on Every life cycle event
    }
    
    */
    useEffect(()=>{
        console.log("Count Changed" , count);
    } , [count])

    useEffect(()=>{
        console.log("Name Changed" , name)
    } ,[name])

    const handleLogs=()=>{
        console.log("Every Time Called")
    }

    useEffect(()=>{
        handleLogs()
    })


    return(
        <>
        <div className="flex justify-start mb-4 relative">
        <Link to="/" className="cursor-pointer absolute top-[-10px] left-1/4 ">Back 🔙</Link>
        </div>
        <h1 className="text-2xl font-bold mt-10">Side Effect in useEffect Hooks Information</h1>

        <div>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="border-2 border-gray-300 p-2 rounded-md" placeholder="Enter your name" />
            <p className="text-lg font-bold mt-2">Name : {name}</p>
            <button onClick={()=> setCount(count +1)} className="bg-purple-500 p-2 m-2 text-white rounded-md">
                Increment Number : {count}
            </button>
            
        </div>


        
       
        </>
    )
}

export default SideEffectInfo;