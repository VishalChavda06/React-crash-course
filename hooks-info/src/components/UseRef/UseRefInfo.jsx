import { Link } from "react-router-dom";
import { useRef } from "react";
const UseRefInfo=()=>{

  const inputRef = useRef(null)

  const handleFocus=()=>{
    console.log(inputRef.current)
    inputRef.current.focus()
  }
    return(
        <>
          <div className="flex justify-start mb-4 relative">
        <Link to="/" className="cursor-pointer absolute top-[-10px] left-1/4 ">Back 🔙</Link>
        </div>
        <h1>UseRef Hook Information</h1>

        <div>
          <input type="text" placeholder="Enter your name" ref={inputRef} />
          <button onClick={handleFocus}>Focus</button>
        </div>
      
        </>
    )
}

export default UseRefInfo;