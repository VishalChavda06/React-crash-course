import { Link } from 'react-router-dom';
import Clock from './Clock';
import { useState } from 'react';
const ClockInfo = () => {
    const [color, setColor] = useState('red');
    return (
        <>
            <button style={{ marginTop: "10px" }}> <Link to="/">Back to 🔙</Link></button>
            <div>
                <h1>Clock Color Demo</h1>
                <div>
                    <select name="color" id="color" onChange={(e) => setColor(e.target.value)}>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <Clock color={color} />
            </div>
        </>
    )
}
export default ClockInfo;