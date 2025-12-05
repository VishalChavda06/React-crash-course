import { useState } from 'react'
import { Link } from 'react-router-dom'
const FormControll = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>

            <h1 className="text-2xl font-bold text-center my-4">Form Controlled</h1>
            <div className='relative'>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600 absolute top-[-60px] left-120'> <Link to='/'>Back to 🔙</Link></button>
                <form action="" className="flex flex-col gap-4 w-1/2 mx-auto" >
                    <input type="text"
                        placeholder="Enter Your Name"
                        className="border-2 border-gray-300 rounded-md p-2"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input type="email" placeholder="Enter Your Email" className="border-2 border-gray-300 rounded-md p-2" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="Enter Your Password" className="border-2 border-gray-300 rounded-md p-2" onChange={(e) => setPassword(e.target.value)} value={password} />
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">Submit</button>
                        <button type="reset" className="bg-red-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-red-600" onClick={() => {
                            setName('')
                            setEmail('')
                            setPassword('')
                        }}>Reset</button>
                    </div>
                </form>

                <div className="flex flex-col gap-2 w-1/2 mx-auto">
                    <h2 className="text-2xl font-bold my-4">Form Data :</h2>
                    <p className="text-lg font-bold">Name : {name}</p>
                    <p className="text-lg font-bold">Email : {email}</p>
                    <p className="text-lg font-bold">Password : {password}</p>
                </div>
            </div>

        </>
    )
}
export default FormControll;