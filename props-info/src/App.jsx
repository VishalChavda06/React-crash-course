import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import UserInfo from './components/UserInfo'
import './App.css'
import BasicInfo from './components/BasicInfo'
import ProductInfo from './components/Products/ProductInfo'
import SellerCard from './components/Project/SellerCard'

function App() {

  const iceCreams = [
    {
      id: 1,
      name: "Vanilla Ice Cream",
      image: "https://media.istockphoto.com/id/1153411309/photo/treaded-ice-cream-with-3-scoops-of-sweet-ice-cream-insulated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Uf8LK4S7VCnnlWR68lRy7-ypcrYQhkzovolT48yc8dY=",
      tags: ["Vegan", "Gluten Free", "Organic"],
      description: "Lorem ipsum dolor sit adipisicing elit. Temporibus, fugit!",
      toppings: ["Choco Chip", "Nuts"],
      price: 10.00,
      delivery: 2
    },
    {
      id: 2,
      name: "Chocolate Fudge",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Dairy", "Rich"],
      description: "Creamy chocolate ice cream with rich fudge swirls.",
      toppings: ["Caramel", "Whipped Cream"],
      price: 12.00,
      delivery: 2
    },
    {
      id: 3,
      name: "Strawberry Delight",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Fruit", "Fresh", "Organic"],
      description: "Fresh strawberry ice cream made with real strawberries.",
      toppings: ["Fresh Berries", "Mint"],
      price: 11.50,
      delivery: 2
    },
    {
      id: 4,
      name: "Mint Chocolate Chip",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Refreshing", "Classic"],
      description: "Cool mint ice cream with chocolate chips throughout.",
      toppings: ["Chocolate Sauce", "Extra Chips"],
      price: 10.50,
      delivery: 2
    },
    {
      id: 5,
      name: "Cookies & Cream",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Popular", "Creamy"],
      description: "Vanilla ice cream with crushed chocolate cookies.",
      toppings: ["Cookie Crumbs", "Chocolate Drizzle"],
      price: 11.00,
      delivery: 2
    },
    {
      id: 6,
      name: "Rocky Road",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Nuts", "Marshmallow"],
      description: "Chocolate ice cream with marshmallows and almonds.",
      toppings: ["Extra Nuts", "Marshmallow Fluff"],
      price: 13.00,
      delivery: 3
    },
    {
      id: 7,
      name: "Butter Pecan",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Nuts", "Buttery"],
      description: "Rich buttery ice cream with roasted pecans.",
      toppings: ["Caramel", "Pecans"],
      price: 12.50,
      delivery: 2
    },
    {
      id: 8,
      name: "Pistachio",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Vegan", "Unique"],
      description: "Smooth pistachio ice cream with a nutty flavor.",
      toppings: ["Pistachios", "Honey"],
      price: 13.50,
      delivery: 2
    },
    {
      id: 9,
      name: "Caramel Swirl",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Sweet", "Creamy"],
      description: "Vanilla ice cream with ribbons of caramel throughout.",
      toppings: ["Caramel Sauce", "Sea Salt"],
      price: 11.50,
      delivery: 2
    },
    {
      id: 10,
      name: "Neapolitan",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
      tags: ["Classic", "Triple Flavor"],
      description: "Three flavors in one: vanilla, chocolate, and strawberry.",
      toppings: ["All Toppings", "Rainbow Sprinkles"],
      price: 12.00,
      delivery: 2
    }
  ]

  
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center my-4">Props Information</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/basicinfo">Basic Info</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/usercard">User Card</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/productinfo">Product Info</Link>
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mx-3 hover:bg-blue-600">
          <Link to="/sellercard">Seller Card</Link>
        </button>
      </div>

      <div>
        <Routes>
          <Route path="/usercard" element={<UserInfo />} />
          <Route path="/basicinfo" element={<BasicInfo />} />
          <Route path="/productinfo" element={<ProductInfo />} />
          <Route path="/sellercard" element={<SellerCard iceCreams={iceCreams} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
