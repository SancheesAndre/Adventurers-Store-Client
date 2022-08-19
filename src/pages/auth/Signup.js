import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import apiService from "../../services/api.service";
import './Signup.css'

function Signup(props) {
  const [state, setState] = useState({ name: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await apiService.signUp(state);
      setErrors({ name: "", password: "", email: "" });
      navigate("/auth/login");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="SignupForm">
      <h1>Signup!</h1>

      <div>
        <label htmlFor="signupFormName"></label>
        <input
          type="text"
          name="name"
          id="signupFormName"
          placeholder="Username"
          value={state.name}
          error={errors.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormEmail"></label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          placeholder="e-mail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword"></label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          placeholder="password"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">→</button>
        <p>Already have an account?</p>
        <Link className="SignupLink" to="/auth/login">
          Click here to login.
        </Link>
      </div>
    </form>
    </div>
  );
}

export default Signup;
