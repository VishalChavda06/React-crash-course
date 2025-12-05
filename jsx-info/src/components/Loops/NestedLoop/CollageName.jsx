import { Link } from 'react-router-dom';
import StudentInfo from './StudentInfo';
const CollageName = () => {

    const CollageData = [
        {
            name: 'RV patel',
            city: 'ahmedabad',
            website: 'rvpatel.com',
            studentData: [
                {
                    name: 'vishal chavda',
                    age: 20,
                    email: 'vishal@gmail.com'
                },
                {
                    name: 'krish gadhiya',
                    age: 21,
                    email: 'vishal@gmail.com'
                }
            ]
        },
        {
            name: 'GD patel',
            city: 'bhavnagar',
            website: 'gdpatel.com',
            studentData: [
                {
                    name: 'prince Doe',
                    age: 20,
                    email: 'john@gmail.com'
                },
                {
                    name: 'nil Doe',
                    age: 21,
                    email: 'jane@gmail.com'
                }
            ]
        },
        {
            name: 'RK patel',
            city: 'rajkot',
            website: 'rkpatel.com',
            studentData: [
                {
                    name: 'mohit Doe',
                    age: 20,
                    email: 'john@gmail.com'
                },
                {
                    name: 'urvesh Doe',
                    age: 21,
                    email: 'jane@gmail.com'
                }
            ]
        },
        {
            name: 'SK patel',
            city: 'udaipur',
            website: 'skpatel.com',
            studentData: [
                {
                    name: 'sujal Doe',
                    age: 20,
                    email: 'john@gmail.com'
                },
                {
                    name: 'hardik Doe',
                    age: 21,
                    email: 'jane@gmail.com'
                }
            ]
        }
    ]
    return (
        <>
            <button style={{ marginTop: "10px" }}> <Link to="/">Back to 🔙</Link></button>
            <h1>Collage Name</h1>

            {CollageData.map((item, index) => {
                return (
                    <div key={index} style={{backgroundColor: "lightgray", padding: "10px", borderRadius: "10px", marginBottom: "10px"}} >
                        <h1>Collage Name: {item.name}</h1>
                        <ul>
                            <li>
                                City: {item.city}
                            </li>
                            <li>
                                Website: {item.website}
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <StudentInfo studentdata={item.studentData} />
                            </li>
                        </ul>

                    </div>
                )
            })}
        </>
    )
}

export default CollageName