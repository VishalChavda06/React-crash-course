const Example=()=>{
    const name = "Vishal Chavda"
    return(
        <>
        <h1>Hello {name}</h1>
        <p>I'm a web developer</p>

        <button onClick={()=> alert("Hello")}>Click me</button>
        </>
    )
}
export default Example;