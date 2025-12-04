import { useState } from "react"
const ArrayCondition = () => {
    const [level, setLevel] = useState(0);

    const WatherInfo = {
        0: "Sunnny ☀️ ",
        1: "Cloudy ☁️ ",
        2: "Rainy ☔️ ",
        3: "Snowy ❄️ ",
        4: "Thunderstorm ⚡️ ",
        5: "Foggy 🌫️ ",
        6: "Haze ⚡️ ",
        7: "Smoke 🚬 ",
        8: "Mist 🌫️ ",
        9: "Dust 🌪️ ",
    }


    return (
        <>
            <h1>Array Condition</h1>

            <h2>{WatherInfo[level] || "No weather information"}</h2>

            <h3>Level :{level}</h3>
            <button onClick={() => setLevel(level + 1)}>Next level</button>
            <button onClick={() => setLevel(0)}>Reset level</button>
        </>
    )
}
export default ArrayCondition;