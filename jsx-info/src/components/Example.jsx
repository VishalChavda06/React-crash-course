import {Link} from 'react-router-dom';
const Example=()=>{
    const name = "Vishal Chavda"
    return(
        <>
        <button style={{marginTop: "10px"}}> <Link to="/">Back to 🔙</Link></button>
        <h1>Hello {name}</h1>
        <p>I'm a web developer</p>

        <button onClick={()=> alert("Hello")}>Click me</button>
        </>
    )
}
export default Example;