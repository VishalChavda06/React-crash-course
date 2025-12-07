import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
const UseEffectInfo=()=>{

    const [count , setCount] = useState(0);
    const [data , setData] = useState(0);
 
    const callOnce=()=>{
        console.log("Called Once Called.🤣"); 
    }
    /* 
    useEffect Dependency that follows the dependency rules of React.

    1 : Call Every Time 
        useEffect(()=>{
            //call every time when the component is rendered
        })
    
    2 : Call Only Once
        useEffect(()=>{
            //call only once when the component is rendered
        },[])

    3 : Call On Changing Single State
        useEffect(()=>{
            //call only once when the component is rendered
        },[data])
    
    4 : Call On Changing Multiple State
        useEffect(()=>{
            //call only once when the component is rendered
        },[data,count])

    5: Call On Changing Props
        useEffect(()=>{
            //call only once when the component is rendered
        },[props])

    */


    // useEffect Hook
    useEffect(()=>{
        // callOnce()
        updateData() // Data Updated 0
    },[data]);

    const updateData=()=>{
        console.log("Data Updated" , data);
    }

    return(
        <>
        <div className="flex justify-start mb-4 relative">
        <Link to="/" className="cursor-pointer absolute top-[-10px] left-1/4 ">Back 🔙</Link>
        </div>
        <h1 className="text-2xl font-bold mt-10">UseEffect Hook</h1>
        

        <div>
            <button onClick={()=> setCount(count +1)} className="bg-purple-500 p-2 m-2 text-white p-2 rounded-md">
                Increment Number : {count}
            </button>
            <button onClick={()=> setData(data +1)} className="bg-purple-500 p-2 m-2 text-white p-2 rounded-md">
                Increment Data : {data}
            </button>
        </div>

    </>
  );
};
export default UseEffectInfo;