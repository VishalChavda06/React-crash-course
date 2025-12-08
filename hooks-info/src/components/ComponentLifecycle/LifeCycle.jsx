import { use, useEffect, useState } from "react";

const LifeCycle = () => {

    const [count, setCount] = useState(0)
    const [display , setDisplay]= useState(true)

    // Mounting
    useEffect(() => {
        console.log("Mounting Component Called")
    }, [])

    //  Updating 
    useEffect(() => {
        console.log("Updating Compenent Called")
    }, [count])

    // Unmounting
    useEffect(() => {
        return () => {
            console.log("Unmounting Component Called")
        }
    }, [])
    return (
        <>
            {display && <h1 className="text-2xl font-bold mt-10">
                <h1>Life Cycle</h1>
                Count is : {count}</h1>}
            <button className="bg-red-500 text-white p-2 rounded-md" onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setCount(count + 1)}>Increment ✚</button>}
            

        </>
    )
}

export default LifeCycle;