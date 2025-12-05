import ProductCard from "./ProductCard";
const ProductInfo=()=>{

    const products=[
        {
            name:'Apple',
            price:100,
            description:'this is a Apple',
            quantity:10,
            rating:4.5
        },
        {
            name:'Banana',
            price:200,
            description:'this is a Banana',
            quantity:10,
            rating:4.5
        },
        
        {
            name:'Orange',
            price:300,
            description:'this is a Orange',
            quantity:10,
            rating:4.5
        }
    ]

    return(
        <>
        <h1>Product Info</h1>
        <ProductCard products={products}/>
        </>
    )
}
export default ProductInfo;