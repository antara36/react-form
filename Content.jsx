import { useState } from "react";

const Content = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    setError1("");
    setError2("");
    setSuccessMessage("");
    if (password !== confirmPassword) {
      setError1("Passwords do not match");
      return;
    }
    if (!terms) {
      setError2("You must agree to the terms and conditions");
      return;
    }
    setSuccessMessage({ name: fullName, email: email });
  };

  return (
    <form className="box" onSubmit={handleRegister}>
      <div className="user-input">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          required
          onChange={(e) => setFullName(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Full Name is required")}
          onInput={(e) => e.target.setCustomValidity("")}/>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email")}
          onInput={(e) => e.target.setCustomValidity("")}/>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Password is required")}
          onInput={(e) => e.target.setCustomValidity("")}/>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          onInvalid={(e) => e.target.setCustomValidity("Please confirm your password")}
          onInput={(e) => e.target.setCustomValidity("")}/>
      </div>

      <div className="gender-btn">
        <label>
          <input type="radio" name="gender" />Male
        </label>
        <label>
          <input type="radio" name="gender" />Female
        </label>
      </div>

      <select className="country" required>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
        <option value="Russia">Russia</option>
      </select>

      <label className="terms-cond">
        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}/>
        I agree to terms and condition
      </label>

      <button type="submit" className="btn">Register</button>

      {error1 && <p className="error-message">{error1}</p>}
      {error2 && <p className="error-message">{error2}</p>}

      {successMessage && (
        <div className="success-message">
        <p>
            ✅ Hello, {successMessage.name}!<br/>
            You have successfully registered with email: {successMessage.email}
        </p>
        </div>
      )}
    </form>
  );
};

export default Content;

