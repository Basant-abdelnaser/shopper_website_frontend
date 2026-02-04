import React, { useState } from "react";
import "./LoginSignup.css";
import joi from "joi";
import { Link } from "react-router-dom";

const Signup = () => {
  const signupSchema = joi.object({
    name: joi.string().min(3).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 3 characters",
    }),
    email: joi
      .string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Invalid email address",
        "string.empty": "Email is required",
      }),
    password: joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
    check: joi.boolean().valid(true).required().messages({
      "any.only": "Please accept the terms and conditions",
    }),
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    check: false,
  });

  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = signupSchema.validate(form, { abortEarly: false });

    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setError(newErrors);
      return;
    }

    setError({});
    console.log(form);
  };

  return (
    <div className="loginSignup">
      <div className="layer">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="emailInput">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={error.name ? { borderColor: "red" } : {}}
            />
            {error.name && <p className="error">{error.name}</p>}
          </div>

          {/* Email */}
          <div className="emailInput">
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={error.email ? { borderColor: "red" } : {}}
            />
            {error.email && <p className="error">{error.email}</p>}
          </div>

          {/* Password */}
          <div className="passInput">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={error.password ? { borderColor: "red" } : {}}
            />
            {error.password && <p className="error">{error.password}</p>}
          </div>

          <button type="submit">Continue</button>

          {/* paragraph before terms */}
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", marginLeft: "7px" }}
            >
              <span>Login here</span>
            </Link>
          </p>

          {/* Terms */}
          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={form.check}
                onChange={(e) => setForm({ ...form, check: e.target.checked })}
              />
              <span>
                By continuing, I agree to the terms of use & privacy policy
              </span>
            </label>

            {error.check && <p className="error">{error.check}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
