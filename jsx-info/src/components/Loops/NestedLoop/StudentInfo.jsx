const StundetInfo=({studentdata})=>{
    return(
        <>
        {studentdata.map((student)=>{
            return(
                <ul key={student.id}>
                    <li>Student Name: {student.name}</li>
                    <li>Student Age: {student.age}</li>
                    <li>Student Email: {student.email}</li>
                </ul>
            )
        })}
        </>
    )
}

export default StundetInfo;
