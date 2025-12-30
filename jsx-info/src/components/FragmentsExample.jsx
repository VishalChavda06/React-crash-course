import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const FragmentsExample = () => {
  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px" }}>
        <h1>Fragments in JSX</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          Fragments allow you to group multiple elements without adding extra DOM nodes.
        </p>

        {/* Example 1: Using Fragment */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>1. Using &lt;Fragment&gt; or &lt;&gt;&lt;/&gt;</h2>
          <Fragment>
            <p>This is inside a Fragment</p>
            <p>Multiple elements without a wrapper div</p>
            <p>No extra DOM node is created</p>
          </Fragment>
        </div>

        {/* Example 2: Short Syntax */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>2. Short Syntax &lt;&gt;&lt;/&gt;</h2>
          <>
            <div style={{ background: "#e3f2fd", padding: "10px", margin: "5px 0", borderRadius: "5px" }}>
              Item 1
            </div>
            <div style={{ background: "#e8f5e9", padding: "10px", margin: "5px 0", borderRadius: "5px" }}>
              Item 2
            </div>
            <div style={{ background: "#fff3e0", padding: "10px", margin: "5px 0", borderRadius: "5px" }}>
              Item 3
            </div>
          </>
        </div>

        {/* Example 3: Fragment with Key (for lists) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>3. Fragment with Key (for Lists)</h2>
          {[
            { id: 1, name: 'React', type: 'Library' },
            { id: 2, name: 'Vue', type: 'Framework' },
            { id: 3, name: 'Angular', type: 'Framework' }
          ].map(item => (
            <Fragment key={item.id}>
              <h3 style={{ margin: "5px 0", color: "#1976d2" }}>{item.name}</h3>
              <p style={{ margin: "0 0 10px 0", color: "#666" }}>Type: {item.type}</p>
            </Fragment>
          ))}
        </div>

        {/* Example 4: Without Fragment (creates extra div) */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>4. Without Fragment (creates wrapper div)</h2>
          <div>
            <p>This creates an extra &lt;div&gt; wrapper</p>
            <p>Not ideal when you don't need it</p>
          </div>
        </div>

        {/* Example 5: Fragment in Conditional Rendering */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>5. Fragment in Conditional Rendering</h2>
          {true && (
            <>
              <p style={{ color: "green" }}>✅ Condition is true</p>
              <p>Multiple elements rendered together</p>
              <p>No wrapper div needed</p>
            </>
          )}
        </div>

        {/* Example 6: Fragment vs Div Comparison */}
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <h2>6. When to Use Fragments</h2>
          <div style={{ background: "#f5f5f5", padding: "15px", borderRadius: "5px", marginTop: "10px" }}>
            <h3 style={{ marginTop: "0" }}>Use Fragments when:</h3>
            <ul>
              <li>You need to return multiple elements</li>
              <li>You don't want extra DOM nodes</li>
              <li>You're mapping over arrays</li>
              <li>You need keys for list items</li>
            </ul>
            <h3 style={{ marginTop: "15px" }}>Use div when:</h3>
            <ul>
              <li>You need styling on the wrapper</li>
              <li>You need event handlers on the wrapper</li>
              <li>You need semantic HTML structure</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default FragmentsExample;

