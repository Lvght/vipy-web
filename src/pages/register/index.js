import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("display_name", name);
    formdata.append("birthday", birthday);
    api
      .post("/profiles/", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const token = response.data.tokens;
        delete response.data.tokens;
        const user = response.data;

        console.log(token);
        console.log(user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/recovery");
      });
  }

  return (
    <div className="login">
      <div className="left">
        <center>
          <img className="logotipo" alt="vipyLogo" src="/Logotipo.svg" />
          <form
            className="loginForm"
            method="post"
            id="registerForm"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Display Name"
              name="display_name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="UserName"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              placeholder="Data de nascimento (dd-mm-aaaa)"
              type="date"
              name="birthday"
              onChange={(e) => setBirthday(e.target.value)}
            />
            <button
              className="goToRegisterButton"
              type="submit"
              id="registerButton"
            >
              Criar conta
            </button>
            <br />
            <hr />
            <Link to="/login" className="loginButton">
              Login
            </Link>
          </form>
        </center>
      </div>
      <div className="right">
        <img alt="loginBackground" src="/bg.png" />
      </div>
    </div>
  );
}
