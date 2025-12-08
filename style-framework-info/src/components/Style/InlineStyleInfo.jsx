import { Link } from "react-router-dom";
const InlineStyleInfo=()=>{

    // Object Base Styling
    const style={
        color :'red',
        fontSize:'30px',
        backgroundColor:'black',
        padding:'10px',
        borderRadius:'10px'
    }

    const imageStyle={
        width:"450px",
        height:"100%",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px"
    }
    return(
        <>
        <div>
            <Link to="/">Home</Link>
        </div>
        <h1 style={{color:'red' , fontSize:'20px' , backgroundColor:'black', padding:'10px', borderRadius:'10px'}}>Inline Style Info</h1>

        <div style={{backgroundColor:"#fff" , width:"450px" , borderRadius:"10px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzR0bIMZ71HVeR5zF4PihQaDvTQQk6bsVERw&s" alt="" style={{width:"100%" , height:"100%" , borderTopLeftRadius:"10px" , borderTopRightRadius:"10px"}} />
            <div style={{padding:"10px"}}>
                <h1 style={{color:"red" , fontSize:"20px" , fontWeight:"bold"}}>Vishal Chavda</h1>
                <p style={{color:"blue" , fontSize:"16px" , fontWeight:"bold"}}>I'm a web developer</p>
                <button style={{backgroundColor:"blue" , color:"white" , padding:"10px" , borderRadius:"10px"}}>Follow</button>
            </div>
        </div>

        {/* Object Base Styling */}
        <div>
            <h1 style={style}>Object Base Styling</h1>
            <div>
                <img src="https://cdn-icons-png.freepik.com/512/219/219988.png" alt="" style={imageStyle} />
            </div>
        </div>
    </>
  );
};
export default InlineStyleInfo;