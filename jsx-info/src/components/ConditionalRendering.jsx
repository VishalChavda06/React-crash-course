import { useState } from 'react';
import { Link } from 'react-router-dom';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [showDetails, setShowDetails] = useState(true);

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px" }}>
        <h1>Conditional Rendering in JSX</h1>

        {/* Example 1: Ternary Operator */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. Ternary Operator (? :)</h2>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} style={{ padding: "8px 16px", marginBottom: "10px" }}>
            Toggle Login Status
          </button>
          <p>
            {isLoggedIn ? (
              <span style={{ color: "green", fontWeight: "bold" }}>✅ User is logged in</span>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>❌ User is not logged in</span>
            )}
          </p>
        </div>

        {/* Example 2: Logical AND (&&) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. Logical AND (&&)</h2>
          <button onClick={() => setShowDetails(!showDetails)} style={{ padding: "8px 16px", marginBottom: "10px" }}>
            Toggle Details
          </button>
          {showDetails && (
            <div style={{ background: "#f0f0f0", padding: "10px", marginTop: "10px" }}>
              <p>This content only shows when showDetails is true!</p>
              <ul>
                <li>Detail 1: Important information</li>
                <li>Detail 2: More details here</li>
                <li>Detail 3: Additional content</li>
              </ul>
            </div>
          )}
        </div>

        {/* Example 3: Multiple Conditions */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. Multiple Conditions</h2>
          <div style={{ marginBottom: "10px" }}>
            <button onClick={() => setUserRole('admin')} style={{ padding: "8px 16px", marginRight: "5px" }}>
              Set Admin
            </button>
            <button onClick={() => setUserRole('user')} style={{ padding: "8px 16px", marginRight: "5px" }}>
              Set User
            </button>
            <button onClick={() => setUserRole('guest')} style={{ padding: "8px 16px" }}>
              Set Guest
            </button>
          </div>
          {userRole === 'admin' && (
            <div style={{ background: "#ff6b6b", color: "white", padding: "10px", borderRadius: "5px" }}>
              <h3>🔐 Admin Dashboard</h3>
              <p>You have full access to all features</p>
            </div>
          )}
          {userRole === 'user' && (
            <div style={{ background: "#4ecdc4", color: "white", padding: "10px", borderRadius: "5px" }}>
              <h3>👤 User Dashboard</h3>
              <p>You have standard user access</p>
            </div>
          )}
          {userRole === 'guest' && (
            <div style={{ background: "#95a5a6", color: "white", padding: "10px", borderRadius: "5px" }}>
              <h3>👋 Guest Access</h3>
              <p>Please log in to access more features</p>
            </div>
          )}
        </div>

        {/* Example 4: Conditional Rendering with Arrays */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>4. Conditional Rendering with Arrays</h2>
          {items.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {items.map((item, index) => (
                <li key={index} style={{ padding: "8px", margin: "5px 0", background: "#e8f4f8", borderRadius: "5px" }}>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ color: "gray", fontStyle: "italic" }}>No items available</p>
          )}
          <button 
            onClick={() => setItems(items.length > 0 ? [] : ['Item 1', 'Item 2', 'Item 3'])}
            style={{ padding: "8px 16px", marginTop: "10px" }}
          >
            {items.length > 0 ? 'Clear Items' : 'Add Items'}
          </button>
        </div>

        {/* Example 5: Early Return Pattern */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. Early Return Pattern</h2>
          {!isLoggedIn ? (
            <div style={{ background: "#fff3cd", padding: "15px", borderRadius: "5px" }}>
              <p>⚠️ Please log in to view this content</p>
            </div>
          ) : (
            <div style={{ background: "#d4edda", padding: "15px", borderRadius: "5px" }}>
              <h3>Welcome! Here's your content:</h3>
              <p>This is protected content that only logged-in users can see.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConditionalRendering;

