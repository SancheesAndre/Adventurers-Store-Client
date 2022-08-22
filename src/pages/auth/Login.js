import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiService from "../../services/api.service";
import './Login.css'

import { AuthContext } from "../../contexts/authContext";
import MessageBox from "../../components/MessageBox";

function Login(props) {
  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const authContext = useContext(AuthContext);

  const message = 'Welcome to the Adverturer’s Store, traveler. Login or create one account to trade and buy itens from other adventurers around the world!'

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
      const response = await apiService.login(state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );
      setErrors({ password: "", email: "" });
      navigate("/storepage");
    } catch (err) {
      console.error(err);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="SignForm">
        <h1>Sign in</h1>

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
          <label htmlFor="signupFormPassword" placeholder="Password"></label>
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
          <p>Can't sign in? </p>
          <Link className="signupLink" to="/auth/signup">Create an Account</Link>

        </div>
      </form>
      <MessageBox message={message} />
    </div>
  );
}

export default Login;
