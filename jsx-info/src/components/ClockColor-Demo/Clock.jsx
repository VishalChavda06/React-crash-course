import {useState, useEffect} from 'react';
const Clock=({color})=>{
    const [time, setTime] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date());
        }, 1000);
    }, []);
    return(
        <>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px", width: "200px", height: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1>Clock</h1>
            <p style={{fontSize: "20px", color: color, backgroundColor: "black", padding: "10px", borderRadius: "10px"}}>Time: {time.toLocaleTimeString()}</p>
        </div>
        </>
    )
}
export default Clock;