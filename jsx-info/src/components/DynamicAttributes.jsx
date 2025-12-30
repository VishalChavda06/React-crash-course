import { useState } from 'react';
import { Link } from 'react-router-dom';

const DynamicAttributes = () => {
  const [imageSrc, setImageSrc] = useState('https://via.placeholder.com/300x200/4CAF50/ffffff?text=Image+1');
  const [linkHref, setLinkHref] = useState('https://react.dev');
  const [inputType, setInputType] = useState('text');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [ariaLabel, setAriaLabel] = useState('Click me button');

  const products = [
    { id: 1, name: 'Laptop', price: 999, inStock: true },
    { id: 2, name: 'Phone', price: 699, inStock: false },
    { id: 3, name: 'Tablet', price: 399, inStock: true },
  ];

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px" }}>
        <h1>Dynamic Attributes in JSX</h1>

        {/* Example 1: Dynamic src attribute */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. Dynamic src Attribute</h2>
          <img
            src={imageSrc}
            alt="Dynamic image"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "5px", marginTop: "10px" }}
          />
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <button
              onClick={() => setImageSrc('https://via.placeholder.com/300x200/2196F3/ffffff?text=Image+1')}
              style={{ padding: "8px 16px" }}
            >
              Image 1
            </button>
            <button
              onClick={() => setImageSrc('https://via.placeholder.com/300x200/FF9800/ffffff?text=Image+2')}
              style={{ padding: "8px 16px" }}
            >
              Image 2
            </button>
            <button
              onClick={() => setImageSrc('https://via.placeholder.com/300x200/E91E63/ffffff?text=Image+3')}
              style={{ padding: "8px 16px" }}
            >
              Image 3
            </button>
          </div>
        </div>

        {/* Example 2: Dynamic href attribute */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. Dynamic href Attribute</h2>
          <a
            href={linkHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline", display: "block", marginTop: "10px" }}
          >
            Current Link: {linkHref}
          </a>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={() => setLinkHref('https://react.dev')} style={{ padding: "8px 16px" }}>
              React
            </button>
            <button onClick={() => setLinkHref('https://nodejs.org')} style={{ padding: "8px 16px" }}>
              Node.js
            </button>
            <button onClick={() => setLinkHref('https://vitejs.dev')} style={{ padding: "8px 16px" }}>
              Vite
            </button>
          </div>
        </div>

        {/* Example 3: Dynamic type attribute */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. Dynamic type Attribute</h2>
          <input
            type={inputType}
            placeholder={`Input type: ${inputType}`}
            style={{ padding: "8px", width: "300px", fontSize: "16px", marginTop: "10px" }}
          />
          <div style={{ marginTop: "10px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {['text', 'email', 'password', 'number', 'date'].map((type) => (
              <button
                key={type}
                onClick={() => setInputType(type)}
                style={{ padding: "8px 16px" }}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Example 4: Dynamic disabled attribute */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>4. Dynamic disabled Attribute</h2>
          <button
            disabled={buttonDisabled}
            onClick={() => alert('Button clicked!')}
            style={{
              padding: "10px 20px",
              background: buttonDisabled ? "#ccc" : "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: buttonDisabled ? "not-allowed" : "pointer",
              marginTop: "10px"
            }}
          >
            {buttonDisabled ? "Disabled" : "Click Me"}
          </button>
          <button
            onClick={() => setButtonDisabled(!buttonDisabled)}
            style={{ padding: "8px 16px", marginLeft: "10px" }}
          >
            Toggle Disabled
          </button>
        </div>

        {/* Example 5: Dynamic className */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. Dynamic className</h2>
          {['primary', 'success', 'warning', 'danger'].map((variant) => (
            <button
              key={variant}
              className={`btn-${variant}`}
              style={{
                padding: "10px 20px",
                margin: "5px",
                background: variant === 'primary' ? '#2196F3' : 
                           variant === 'success' ? '#4CAF50' :
                           variant === 'warning' ? '#FF9800' : '#f44336',
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </button>
          ))}
        </div>

        {/* Example 6: Dynamic aria-label */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>6. Dynamic aria-label (Accessibility)</h2>
          <button
            aria-label={ariaLabel}
            onClick={() => alert('Button with dynamic aria-label clicked!')}
            style={{ padding: "10px 20px", marginTop: "10px" }}
          >
            Accessible Button
          </button>
          <input
            type="text"
            value={ariaLabel}
            onChange={(e) => setAriaLabel(e.target.value)}
            placeholder="Change aria-label"
            style={{ padding: "8px", width: "300px", marginLeft: "10px" }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
            Current aria-label: "{ariaLabel}"
          </p>
        </div>

        {/* Example 7: Dynamic data attributes */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>7. Dynamic data-* Attributes</h2>
          {products.map((product) => (
            <div
              key={product.id}
              data-product-id={product.id}
              data-in-stock={product.inStock}
              data-price={product.price}
              style={{
                padding: "15px",
                margin: "10px 0",
                background: product.inStock ? "#e8f5e9" : "#ffebee",
                border: `2px solid ${product.inStock ? "#4CAF50" : "#f44336"}`,
                borderRadius: "5px"
              }}
            >
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Status: {product.inStock ? "✅ In Stock" : "❌ Out of Stock"}</p>
              <p style={{ fontSize: "12px", color: "#666", marginTop: "5px" }}>
                Check console for data attributes
              </p>
            </div>
          ))}
        </div>

        {/* Example 8: Conditional attributes */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>8. Conditional Attributes</h2>
          <input
            type="text"
            placeholder="Enter text"
            required={true}
            readOnly={false}
            style={{ padding: "8px", width: "300px", marginTop: "10px" }}
          />
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#666" }}>
            Attributes can be conditionally applied: required={true}, readOnly={false}
          </p>
        </div>
      </div>
    </>
  );
};

export default DynamicAttributes;

