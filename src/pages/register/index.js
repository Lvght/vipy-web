import React from "react";
import "./styles.css";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="left">
        <center>
          <img className="logotipo" alt="vipyLogo" src="/Logotipo.svg"/>
          <form className="loginForm" method="post" id="registerForm">
            <input placeholder="Display Name" name="display_name"/>
            <input placeholder="UserName" name="username"/>
            <input placeholder="Email" type="email" name="email"/>
            <input type="password" placeholder="Password" name="password"/>
            <input
              placeholder="Data de nascimento (dd-mm-aaaa)"
              type="date"
              name="birthday"
            />
            <button
              className="goToRegisterButton"
              type="submit"
              id="registerButton"
              onClick={() => {
                navigate("/timeline");
              }}
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
        <img alt="loginBackground" src="/bg.png"/>
      </div>
    </div>
  );
}
