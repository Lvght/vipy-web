import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";
import {useNavigate} from "react-router";

export default function Login() {
  const navigate = useNavigate();
  
  return (
    <div className="login">
      <div className="left">
        <img className="logotipo" alt="vipyLogo" src="/Logotipo.svg"/>
        <form className="loginForm" id="loginForm">
          <input placeholder="Username" name="username"/>
          <input placeholder="Password" type="password" name="password"/>
  
          <button
            className="loginButton"
            id="loginButton"
            onClick={() => {
              navigate("/timeline");
            }}
          >
            Login
          </button>
  
          <br/>
          <a href="/forgotPassword">Esqueceu sua senha?</a>
          <hr/>
        </form>
  
        <Link to="/register" className="goToRegisterButton">
          Cadastrar
        </Link>
      </div>
      <div className="right">
        <img alt="loginBackground" src="/bg.png"/>
      </div>
    </div>
  );
}
