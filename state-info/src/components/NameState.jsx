import { useState } from "react";

const NameState=()=>{

    const [name, setName] = useState("Vishal Chavda")

    const handleName = () => {
        setName("Vishu")
    }

    return(
        <>
        <h3>Name :{name}</h3>
        <button onClick={handleName}>Change Name</button>
        <button onClick={()=> setName("Vishal Chavda")}>Reset Name</button>
        </>
    )
}

export default NameState