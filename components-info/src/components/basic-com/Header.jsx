
const Header=()=>{
  return(
    <>
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
      <div>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjsScWYmyfPv3XdkNdEFVJ1wlDKMOgcSWUcg&s"} alt="logo" />
      </div>
      <div>
        <p>Welcome to our website</p>
      </div>
      <div>
        <ul style={{display: "flex", gap: "20px"}}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
    </>
  )
}
export default Header;



