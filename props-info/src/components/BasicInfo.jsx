import BasicInfoShow from "./BasicInfoShow"
const BasicInfo=()=>{

    const user={
        username:"Vishu",
        email:'vishu@gmail.com',
        number:9825405883
    }

    return(
        <>
        <div>
            <h1>vailable props</h1>
            <BasicInfoShow name={"vishal Chavda"} age={20} city={"Surat"}/>

            {/* <h2>Object Props</h2> */}
            <BasicInfoShow {...user}/>
        </div>  
        </>
  );
};

export default BasicInfo;