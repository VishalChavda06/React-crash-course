import { use, useState } from "react";
const Toggle = () => {

    const [display, setDisplay] = useState(true);

    const [step, setStep] = useState(0)
    const handleStep = () => {
        // 0 -> 1 -> 2 -> 0
        setStep((prev) => (prev + 1) % 3)
    }

    // array using toggle
    // react -> vue -> angular -> react
    const options = ["React", "Vue", "Angular"]
    const [index, setIndex] = useState(0)
    const toggleOption = () => {
        setIndex((prev) => (prev + 1) % 3)
    }

    return (
        <>
            <h1 className="text-2xl font-bold text-center my-4">Toggle with useState</h1>

            {display ? <h1 className="text-2xl font-bold text-center my-4">Hello I'm Vishal Chavda</h1> : <h1 className="text-2xl font-bold text-center my-4">User not Found</h1>}
            <button onClick={() => setDisplay(!display)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Toggle Name</button>


            {/* 3 condition example */}
            <h2 className="text-2xl mb-2 mt-10 font-bold">3 condition example</h2>
            <div className="my-4">
                <h2 className="text-2xl mb-2 font-bold">Current step : {step}</h2>
                <button onClick={handleStep} className="bg-blue-500 text-white px-4 py-2 rounded-md">Change step</button>
            </div>

            {/* array using toggle */}
            <div className="my-4">
                <h2 className="text-2xl mb-2 font-bold">Current option : {options[index]}</h2>
                <button onClick={toggleOption} className="bg-blue-500 text-white px-4 py-2 rounded-md">Change option</button>
            </div>
        </>
    )
}
export default Toggle;