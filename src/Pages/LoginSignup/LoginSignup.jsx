import React from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="loginSignup">
      <div className="layer">
        <h1>Login</h1>

        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />

        <button>Continue</button>

        <p>
          Create an account? <span>Click here</span>
        </p>

        <div className="terms">
          <input type="checkbox" />
          <span>
            By continuing, I agree to the terms of use & privacy policy
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
