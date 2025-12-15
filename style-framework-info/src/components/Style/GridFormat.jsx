import { Link } from "react-router-dom";
import { useState } from "react";
const GridFormat = () => {

  const [grid , setGrid] = useState(true);
  return (
    <>
      <Link to="/">Home</Link>
      <h1>Grid Format</h1>
      <button onClick={()=> setGrid(!grid)} style={{marginBottom: "20px"}}>Toggle Grid</button>
      <div style={{display:grid ? 'flex' : 'block', flexWrap:'wrap', gap: "30px"}}>
        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>


        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>


        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>

        <div style={{ border: "1px solid black", padding: "10px", borderRadius: "10px", width: "300px", height: "500px", backgroundColor: "white" , color: "black" }}>
          <img src="https://m.media-amazon.com/images/I/41z7zhF2HDL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
          <h4>Toy Imagine Kids Digital Camera Toy </h4>
          <p>Video Camera with 2-Inch Screen & 32GB Capacity – Easy USB </p>
          <p>price: 1000 </p>
        </div>
      </div>

    </>
  )
}
export default GridFormat;