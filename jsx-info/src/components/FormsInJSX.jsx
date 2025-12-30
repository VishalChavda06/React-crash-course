import { useState } from 'react';
import { Link } from 'react-router-dom';

const FormsInJSX = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    country: '',
    interests: [],
    bio: '',
    agree: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    alert('Form submitted! Check the submitted data below.');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      password: '',
      gender: '',
      country: '',
      interests: [],
      bio: '',
      agree: false
    });
    setSubmittedData(null);
  };

  return (
    <>
      <button style={{ marginTop: "10px" }}>
        <Link to="/">Back to 🔙</Link>
      </button>
      
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Forms in JSX</h1>

        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          {/* Text Input */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
              required
            />
          </div>

          {/* Email Input */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
              required
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
              required
            />
          </div>

          {/* Radio Buttons */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Gender:
            </label>
            <div style={{ display: "flex", gap: "20px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>

          {/* Select Dropdown */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Country:
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }}
            >
              <option value="">Select a country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="canada">Canada</option>
              <option value="australia">Australia</option>
            </select>
          </div>

          {/* Checkboxes (Multiple) */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Interests:
            </label>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
              {['Reading', 'Sports', 'Music', 'Travel', 'Coding'].map((interest) => (
                <label key={interest} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest.toLowerCase()}
                    checked={formData.interests.includes(interest.toLowerCase())}
                    onChange={handleChange}
                  />
                  {interest}
                </label>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Bio:
            </label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              rows="4"
              style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", resize: "vertical" }}
            />
          </div>

          {/* Single Checkbox */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{
                padding: "10px 20px",
                background: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer"
              }}
            >
              Reset
            </button>
          </div>
        </form>

        {/* Display Submitted Data */}
        {submittedData && (
          <div style={{ marginTop: "30px", padding: "20px", background: "#f5f5f5", borderRadius: "8px", border: "1px solid #ccc" }}>
            <h2>Submitted Data:</h2>
            <pre style={{ background: "#fff", padding: "15px", borderRadius: "5px", overflow: "auto" }}>
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </>
  );
};

export default FormsInJSX;

