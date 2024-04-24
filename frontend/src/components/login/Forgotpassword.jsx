import React from "react";
import "./Forgotpassword.css"; // Import CSS file

function Forgotpassword() {
  return (
    <div className="divcenter">
      <div className="forgot-password-container">
        <h2>Reset your password</h2>
        <p>
          Have no fear. We'll email you instructions to reset your password. If
          you don't have access to your email, we can try account recovery.
        </p>
        <form>
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Forgotpassword;
