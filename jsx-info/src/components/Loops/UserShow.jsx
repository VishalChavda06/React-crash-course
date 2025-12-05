const UserShow=({user})=>{
    return(
        <>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
            <p>City: {user.city}</p>
            <p>Phone: {user.phone}</p>
        </div>
        </>
    )
}
export default UserShow;