import { useState } from "react";
const Condition1 = () => {

    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Multiple condtions</h1>

            {count == 0 ? <h1>condition 0 apllyed</h1>
                : count == 1 ? <h1>condition 1 apllyed</h1>
                    : count == 2 ? <h1>condition 2 apllyed</h1>
                        : count == 3 ? <h1>condition 3 apllyed</h1>
                            : count == 4 ? <h1>condition 4 apllyed</h1>
                                : count == 5 ? <h1>condition 5 apllyed</h1>
                                    : count == 6 ? <h1>condition 6 apllyed</h1>
                                        : count == 7 ? <h1>condition 7 apllyed</h1>
                                            : count == 8 ? <h1>condition 8 apllyed</h1>
                                                : count == 9 ? <h1>condition 9 apllyed</h1>
                                                    : <h1>condition not apllyed</h1>}

            <h4>Count : {count}</h4>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </>
    )
}
export default Condition1;