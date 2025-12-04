import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <>
            {/* Number Increment & Decrement */}
            <h3>Number Increment & Decrement</h3>
            <h3>Count :{count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    )

}

export default Counter;