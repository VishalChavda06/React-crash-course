import { useState } from 'react';
import { Link } from 'react-router-dom';

const AdvancedJSX = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', category: 'fruit' },
    { id: 2, name: 'Carrot', category: 'vegetable' },
    { id: 3, name: 'Banana', category: 'fruit' },
    { id: 4, name: 'Broccoli', category: 'vegetable' },
  ]);

  // Function that returns JSX
  const renderCard = (title, content, color) => {
    return (
      <div style={{
        padding: "15px",
        background: color,
        borderRadius: "8px",
        margin: "10px 0",
        color: "white"
      }}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    );
  };

  // Complex JSX with nested structures
  const renderNestedList = (data) => {
    return (
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map(item => (
          <li key={item.id} style={{ margin: "10px 0", padding: "10px", background: "#f5f5f5", borderRadius: "5px" }}>
            <strong>{item.name}</strong> - {item.category}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px" }}>
        <h1>Advanced JSX Patterns</h1>

        {/* Example 1: Function returning JSX */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. Function Returning JSX</h2>
          {renderCard("Card 1", "This card is rendered by a function", "#2196F3")}
          {renderCard("Card 2", "Reusable JSX pattern", "#4CAF50")}
          {renderCard("Card 3", "Dynamic content with parameters", "#FF9800")}
        </div>

        {/* Example 2: JSX in Variables */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. JSX Stored in Variables</h2>
          {(() => {
            const header = <h3 style={{ color: "#1976d2" }}>Dynamic Header</h3>;
            const content = <p>This content is stored in variables</p>;
            const footer = <p style={{ fontSize: "12px", color: "#666" }}>Footer text</p>;
            
            return (
              <div style={{ background: "#f5f5f5", padding: "15px", borderRadius: "5px" }}>
                {header}
                {content}
                {footer}
              </div>
            );
          })()}
        </div>

        {/* Example 3: Immediately Invoked Function Expression (IIFE) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. IIFE in JSX</h2>
          {(() => {
            const randomNumber = Math.floor(Math.random() * 100);
            const isEven = randomNumber % 2 === 0;
            
            return (
              <div style={{ background: isEven ? "#e8f5e9" : "#fff3e0", padding: "15px", borderRadius: "5px" }}>
                <p>Random Number: <strong>{randomNumber}</strong></p>
                <p>It is {isEven ? "even" : "odd"}</p>
              </div>
            );
          })()}
        </div>

        {/* Example 4: Complex Nested JSX */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>4. Complex Nested JSX</h2>
          <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "5px" }}>
            <h3>Items List:</h3>
            {renderNestedList(items)}
          </div>
        </div>

        {/* Example 5: JSX with Array Methods */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. JSX with Array Methods</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {items
              .filter(item => item.category === 'fruit')
              .map(item => (
                <div
                  key={item.id}
                  style={{
                    padding: "10px",
                    background: "#4CAF50",
                    color: "white",
                    borderRadius: "5px"
                  }}
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>

        {/* Example 6: Conditional JSX with Ternary */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>6. Conditional JSX with Ternary</h2>
          {items.length > 0 ? (
            <div style={{ background: "#e3f2fd", padding: "15px", borderRadius: "5px" }}>
              <p>✅ Items available: {items.length}</p>
              <ul>
                {items.map(item => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div style={{ background: "#ffebee", padding: "15px", borderRadius: "5px" }}>
              <p>❌ No items available</p>
            </div>
          )}
        </div>

        {/* Example 7: JSX with Spread Operator */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>7. JSX with Spread Operator</h2>
          {(() => {
            const baseProps = {
              style: { padding: "10px", margin: "5px", borderRadius: "5px" },
              onClick: () => alert("Clicked!")
            };
            
            const variant1 = { ...baseProps, style: { ...baseProps.style, background: "#2196F3", color: "white" } };
            const variant2 = { ...baseProps, style: { ...baseProps.style, background: "#4CAF50", color: "white" } };
            
            return (
              <div>
                <button {...variant1}>Variant 1</button>
                <button {...variant2}>Variant 2</button>
              </div>
            );
          })()}
        </div>

        {/* Example 8: JSX with Template Literals */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>8. JSX with Template Literals</h2>
          {items.map(item => (
            <div key={item.id} style={{ padding: "10px", margin: "5px 0", background: "#f5f5f5", borderRadius: "5px" }}>
              <p>{`${item.name} is a ${item.category}`}</p>
              <p style={{ fontSize: "12px", color: "#666" }}>
                {`Item ID: ${item.id} | Category: ${item.category.toUpperCase()}`}
              </p>
            </div>
          ))}
        </div>

        {/* Example 9: JSX with Computed Properties */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>9. JSX with Computed Properties</h2>
          {(() => {
            const themes = {
              light: { bg: "#ffffff", text: "#000000", border: "#ccc" },
              dark: { bg: "#2c3e50", text: "#ffffff", border: "#555" },
              blue: { bg: "#2196F3", text: "#ffffff", border: "#1976d2" }
            };
            
            return Object.keys(themes).map(themeName => {
              const theme = themes[themeName];
              return (
                <div
                  key={themeName}
                  style={{
                    padding: "15px",
                    margin: "10px 0",
                    background: theme.bg,
                    color: theme.text,
                    border: `2px solid ${theme.border}`,
                    borderRadius: "5px"
                  }}
                >
                  {themeName.charAt(0).toUpperCase() + themeName.slice(1)} Theme
                </div>
              );
            });
          })()}
        </div>

        {/* Example 10: JSX with Children Pattern */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>10. JSX Composition Pattern</h2>
          {(() => {
            const Container = ({ children, title }) => (
              <div style={{ border: "2px solid #2196F3", padding: "15px", borderRadius: "5px", margin: "10px 0" }}>
                <h3 style={{ marginTop: "0", color: "#1976d2" }}>{title}</h3>
                {children}
              </div>
            );
            
            return (
              <Container title="Composed Component">
                <p>This is content passed as children</p>
                <p>JSX composition allows flexible component structures</p>
              </Container>
            );
          })()}
        </div>
      </div>
    </>
  );
};

export default AdvancedJSX;

