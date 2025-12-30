import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventHandling = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [keyPressed, setKeyPressed] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleDoubleClick = () => {
    alert('Double clicked!');
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleKeyDown = (e) => {
    setKeyPressed(e.key);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px" }}>
        <h1>Event Handling in JSX</h1>

        {/* Example 1: onClick Event */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. onClick Event</h2>
          <button onClick={handleClick} style={{ padding: "10px 20px", marginRight: "10px" }}>
            Click Me
          </button>
          <button onClick={() => setCount(count + 1)} style={{ padding: "10px 20px" }}>
            Count: {count}
          </button>
        </div>

        {/* Example 2: onDoubleClick Event */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. onDoubleClick Event</h2>
          <button onDoubleClick={handleDoubleClick} style={{ padding: "10px 20px" }}>
            Double Click Me
          </button>
        </div>

        {/* Example 3: onChange Event */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. onChange Event (Input)</h2>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            style={{ padding: "8px", width: "300px", fontSize: "16px" }}
          />
          <p style={{ marginTop: "10px" }}>
            You typed: <strong>{inputValue || '(nothing yet)'}</strong>
          </p>
        </div>

        {/* Example 4: onMouseMove Event */}
        <div
          style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}
          onMouseMove={handleMouseMove}
        >
          <h2>4. onMouseMove Event</h2>
          <p>Move your mouse over this box:</p>
          <p style={{ background: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
            Mouse Position: X = {mousePosition.x}, Y = {mousePosition.y}
          </p>
        </div>

        {/* Example 5: onKeyDown Event */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. onKeyDown Event</h2>
          <input
            type="text"
            onKeyDown={handleKeyDown}
            placeholder="Press any key..."
            style={{ padding: "8px", width: "300px", fontSize: "16px" }}
          />
          {keyPressed && (
            <p style={{ marginTop: "10px" }}>
              Last key pressed: <strong>{keyPressed}</strong>
            </p>
          )}
        </div>

        {/* Example 6: onSubmit Event (Form) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>6. onSubmit Event (Form)</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{ padding: "8px" }}
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{ padding: "8px" }}
            />
            <button type="submit" style={{ padding: "10px", background: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
              Submit Form
            </button>
          </form>
        </div>

        {/* Example 7: Event with Parameters */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>7. Event with Parameters</h2>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {['Red', 'Blue', 'Green', 'Yellow'].map((color) => (
              <button
                key={color}
                onClick={() => alert(`You clicked ${color} button!`)}
                style={{
                  padding: "10px 20px",
                  background: color.toLowerCase(),
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Example 8: Prevent Default */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>8. preventDefault()</h2>
          <a
            href="https://react.dev"
            onClick={(e) => {
              e.preventDefault();
              alert('Link click prevented! Default navigation stopped.');
            }}
            style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
          >
            Click this link (prevented)
          </a>
        </div>
      </div>
    </>
  );
};

export default EventHandling;

