import {Link} from 'react-router-dom';
import UserShow from './UserShow';

const Users=[
    {
        name:'vishal',
        age:20,
        email:'vishal@gmail.com',
        city:'surat',
        phone:1234567890,
    },
    {
        name:'jay',
        age:21,
        email:'jay@gmail.com',
        city:'ahmedabad',
        phone:1234567890,
    },
    {
        name:'raj',
        age:22,
        email:'raj@gmail.com',
        city:'bhavnagar',
        phone:1234567890,   
    },
    {
        name:'karan',
        age:23,
        email:'karan@gmail.com',
        city:'rajkot',
        phone:1234567890,
    },
    {
        name:'harsh',
        age:24,
        email:'harsh@gmail.com',
        city:'udaipur',
        phone:1234567890,
    }
]

const UserInfo=()=>{
    return(

        <>
        <button style={{marginTop: "10px"}}> <Link to="/">Back to 🔙</Link></button>
        <div>
            <h1>Reuse Componetns with loops and pass data to it</h1>

            {Users.map((user)=>(
                <UserShow key={user} user={user} />
            ))}
        </div>
        </>
    )
}
export default UserInfo;