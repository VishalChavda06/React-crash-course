const MoreInfo=()=>{

    // variable in jsx
    const name = "Vishal Chavda"

    // function in jsx
    const sum =(x,y)=>{
        return x + y
    }

    // function in jsx with condition
    const opreation =(x,y,op)=>{
        if(op === "+"){
            return x + y
        }else if(op === "-"){
            return x - y
        }
        else{
            return x*y
        }
    }

    // object in jsx
    const User={
        name: "Vishal Chavda",
        age: 20,
        city: "Ahmedabad",
        country: "India",
    }

    // array in jsx
    const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"]
    return(
        <>
        <h1>Jsx More Information</h1>

        <p>User varialble with jsx</p>
        <span>{name?name:"User not found"}</span>

        <h3>Sum of 10 and 29 = {sum(10,29)}</h3>

        <h4>opreation result : {opreation(10,20,"+")}</h4>
        <h4>opreation result : {opreation(10,20,"-")}</h4>
        <h4>opreation result : {opreation(10,20,"*")}</h4>


        {/* Object in jsx */}
        <h1>User Object with jsx</h1>
        <p>User name is : {User.name}</p>
        <p>User age is : {User.age}</p>
        <p>User city is : {User.city}</p>
        <p>User country is : {User.country}</p>

        {/* Array in jsx */}
        <h1>Fruits Array with jsx</h1>
        <p>Frist fruit is : {fruits[0]}</p>
        <p>Second fruit is : {fruits[1]}</p>
        <p>Third fruit is : {fruits[2]}</p>
        <p>Fourth fruit is : {fruits[3]}</p>
        <p>Fifth fruit is : {fruits[4]}</p>
        </>
    )

}

export default MoreInfo;