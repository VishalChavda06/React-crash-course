const ProductCard=({products})=>{
    
    return(
        <>
        <h1>Product card with array</h1>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>Name:{products[0].name}</h2>
            <p>Price:{products[0].price}</p>
            <p>Description:{products[0].description}</p>
            <p>Quantity:{products[0].quantity}</p>
            <p>Rating:{products[0].rating}</p>
        </div>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>Name:{products[1].name}</h2>
            <p>Price:{products[1].price}</p>
            <p>Description:{products[1].description}</p>
            <p>Quantity:{products[1].quantity}</p>
            <p>Rating:{products[1].rating}</p>
        </div>
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <h2>Name:{products[2].name}</h2>
            <p>Price:{products[2].price}</p>
            <p>Description:{products[2].description}</p>
            <p>Quantity:{products[2].quantity}</p>
            <p>Rating:{products[2].rating}</p>
        </div>
        </>
    )
}

export default ProductCard;