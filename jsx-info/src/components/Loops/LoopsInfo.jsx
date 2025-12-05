import {Link} from 'react-router-dom';
const LoopsInfo=()=>{

    const Students=[
        {
            name:'vishal',
            age:20,
            email:'vishal@gmail.com',
            city:'surat',
            id:1,
        },
        {
            name:'jay',
            age:21,
            email:'jay@gmail.com',
            city:'ahmedabad',
            id:2,
        },
        {
            name:'raj',
            age:22,
            email:'raj@gmail.com',
            city:'bhavnagar',
            id:3,   
        },
        {
            name:'karan',
            age:23,
            email:'karan@gmail.com',
            city:'rajkot',
            id:4,
        },
        {
            name:'harsh',
            age:24,
            email:'harsh@gmail.com',
            city:'udaipur',
            id:5,
        }
    ]
    return(
        <>
        <button style={{marginTop: "10px"}}> <Link to="/">Back to 🔙</Link></button>
        <div>
            <h1>Loops Information</h1>
            <table border={"1"}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {Students.map((student)=>(
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.email}</td>
                            <td>{student.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )

} 
    export default LoopsInfo