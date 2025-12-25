import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Counter Component</h1>
            <h3>Count :{count}</h3>
            <button onClick={() => setCount(count + 1)}>Increment Number</button>
            <button onClick={() => setCount(count - 1)}>Decrement Number</button>
            <button onClick={() => setCount(count + 5)}>Jump by 5</button>
        </div>
    )
}

export default Counter