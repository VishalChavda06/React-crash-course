import { useState, useEffect } from "react";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  // Fake API call
  useEffect(() => {
    setTimeout(() => {
      setOrders(["Order #101", "Order #102"]);
      setLoading(false);
    }, 2000);
  }, []);

  // ❌ Not logged in
  if (!isLoggedIn) {
    return <h2>Please login to view dashboard</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Dashboard</h2>

      {/* 🔄 Loading */}
      {loading && <p>Loading orders...</p>}

      {/* 📭 No orders */}
      {!loading && orders.length === 0 && (
        <p>No orders found</p>
      )}

      {/* 📦 Orders available */}
      {!loading && orders.length > 0 && (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order}</li>
          ))}
        </ul>
      )}
    </div>
    
  )
};

export default Dashboard;
