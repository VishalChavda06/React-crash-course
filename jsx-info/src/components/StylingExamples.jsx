import { useState } from 'react';
import { Link } from 'react-router-dom';

const StylingExamples = () => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('light');

  // Inline styles object
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  };

  const cardStyle = {
    background: theme === 'light' ? '#ffffff' : '#2c3e50',
    color: theme === 'light' ? '#000000' : '#ffffff',
    padding: "20px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    transition: "all 0.3s ease"
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={containerStyle}>
        <h1>Styling in JSX</h1>

        {/* Example 1: Inline Styles */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. Inline Styles</h2>
          <div style={{ background: "#e3f2fd", padding: "15px", borderRadius: "5px", marginTop: "10px" }}>
            <p style={{ color: "#1976d2", fontWeight: "bold" }}>This is styled with inline styles</p>
            <p style={{ color: "#424242", fontSize: "14px" }}>Inline styles use camelCase (backgroundColor, not background-color)</p>
          </div>
        </div>

        {/* Example 2: Style Objects */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. Style Objects</h2>
          <div style={cardStyle}>
            <p>This card uses a style object defined in the component</p>
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              style={{ ...buttonStyle, background: theme === 'light' ? '#2196F3' : '#FFC107', color: theme === 'light' ? 'white' : 'black' }}
            >
              Toggle Theme ({theme})
            </button>
          </div>
        </div>

        {/* Example 3: Dynamic Styles */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. Dynamic Styles</h2>
          <button
            onClick={() => setIsActive(!isActive)}
            style={{
              ...buttonStyle,
              background: isActive ? "#4CAF50" : "#f44336",
              color: "white",
              transform: isActive ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease"
            }}
          >
            {isActive ? "Active" : "Inactive"}
          </button>
          <p style={{ marginTop: "10px" }}>
            Button is: <strong>{isActive ? "Active (Green)" : "Inactive (Red)"}</strong>
          </p>
        </div>

        {/* Example 4: Conditional Styles */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>4. Conditional Styles</h2>
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              style={{
                padding: "10px",
                margin: "5px 0",
                background: num % 2 === 0 ? "#e8f5e9" : "#fff3e0",
                borderLeft: num % 2 === 0 ? "4px solid #4CAF50" : "4px solid #FF9800",
                borderRadius: "5px"
              }}
            >
              Item {num} - {num % 2 === 0 ? "Even (Green)" : "Odd (Orange)"}
            </div>
          ))}
        </div>

        {/* Example 5: CSS Classes (using className) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. CSS Classes with className</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <div className="box" style={{ padding: "15px", background: "#ffebee", borderRadius: "5px" }}>
              Box 1
            </div>
            <div className="box" style={{ padding: "15px", background: "#e8eaf6", borderRadius: "5px" }}>
              Box 2
            </div>
            <div className="box" style={{ padding: "15px", background: "#e0f2f1", borderRadius: "5px" }}>
              Box 3
            </div>
          </div>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
            Note: className is used for CSS classes, not class (which is a reserved word in JavaScript)
          </p>
        </div>

        {/* Example 6: Style with Variables */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>6. Styles with Variables</h2>
          {(() => {
            const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            return (
              <div style={{ background: randomColor, padding: "20px", borderRadius: "5px", color: "white", marginTop: "10px" }}>
                <p style={{ fontWeight: "bold" }}>Dynamic Background Color</p>
                <p style={{ fontSize: "12px" }}>Color: {randomColor}</p>
              </div>
            );
          })()}
        </div>

        {/* Example 7: Multiple Style Properties */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>7. Multiple Style Properties</h2>
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              marginTop: "10px"
            }}
          >
            <h3 style={{ margin: "0 0 10px 0" }}>Gradient Background</h3>
            <p style={{ margin: "0", opacity: "0.9" }}>Multiple style properties combined</p>
          </div>
        </div>

        {/* Example 8: Responsive Styles */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>8. Responsive Styles</h2>
          <div
            style={{
              padding: "15px",
              background: "#f5f5f5",
              borderRadius: "5px",
              width: "100%",
              maxWidth: "600px",
              margin: "10px auto",
              textAlign: "center"
            }}
          >
            <p>This box has max-width for responsiveness</p>
            <p style={{ fontSize: "12px", color: "#666" }}>Resize the window to see the effect</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StylingExamples;

