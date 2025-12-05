import {  useState } from "react";
import { Link } from "react-router-dom";
const RadioInfo = () => {

    const [gender, setGender] = useState('')
    const [country , setCountry]= useState('India')
    return (<>

        <div className="mt-20">
            <div className="relative">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600 absolute top-[-60px] left-120"> <Link to='/'>Back to 🔙</Link></button>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-4 mt-10 w-1/4 mx-auto">
                <h2>Radio Information</h2>
                <div>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="male" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} checked={gender === 'Male'} className="ml-2" />
                    <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} checked={gender === 'Female'} className="ml-2" />
                    </div>
                </div>

                <div>Selected Gender : {gender? gender : 'None'}</div>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-gray-300 rounded-md p-4 mt-10 w-1/4 mx-auto">
                <h2>Dropdown Information</h2>
                <select name="country" defaultValue={'India'} id="country" onChange={(e) => setCountry(e.target.value)} value={country} className="mt-2 px-2 py-1 rounded-md border-2 border-gray-300">
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="New Zealand">New Zealand</option>
                </select>
                <div>Selected Country : {country? country : 'None'}</div>
            </div>
        </div>
    </>
    )
}
export default RadioInfo;