import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router";
import api from "../../services/api";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      device_name: "Vipy React client",
      username,
      password,
    };

    api
      .post("/profiles/login/", data)
      .then((response) => {
        const token = response.data.tokens;
        delete response.data.tokens;
        const user = response.data;

        console.log(token);
        console.log(user);
        localStorage.setItem("tokens", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/timeline");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="login">
      <div className="left">
        <img className="logotipo" alt="vipyLogo" src="/Logotipo.svg" />
        <form className="loginForm" id="loginForm" onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="loginButton" id="loginButton">
            Login
          </button>

          <br />
          <a href="/forgotPassword">Esqueceu sua senha?</a>
          <hr />
        </form>

        <Link to="/register" className="goToRegisterButton">
          Cadastrar
        </Link>
      </div>
      <div className="right">
        <img alt="loginBackground" src="/bg.png" />
      </div>
    </div>
  );
}
