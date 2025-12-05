

const BasicInfoShow=({name , age , city   , ...user})=>{
    return (
        <>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>Props Basic Information</h2>
            <p>Name:{name}</p>
            <p>age:{age}</p>
            <p>city:{city}</p>
        </div>

        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>Object Props</h2>
            <p>Username:{user.username}</p>
            <p>email:{user.email}</p>
            <p>number:{user.number}</p>
        </div>

       
       
      
        </>
    )
}
export default BasicInfoShow;