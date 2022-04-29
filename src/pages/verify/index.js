import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useNavigate } from "react-router";
import api from "../../services/api";

export default function Verify() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      code: code,
    };
    setError("");
    api
      .post("/profiles/verify/", data)
      .then((response) => {
        const token = response.data.tokens;
        delete response.data.tokens;

        console.log(token);
        localStorage.setItem("token", token);
        navigate("/timeline");
      })
      .catch((error) => {
        console.log(error);
        setError("Código de verificação inválido");
      });
  }

  return (
    <div className="login">
      <div className="left">
        <img className="logotipo" alt="vipyLogo" src="/Logotipo.svg" />
        <form className="loginForm" id="loginForm" onSubmit={handleSubmit}>
          <h4>
            Um código de 6 caractéres foi enviado via email para você.
            <br />
            Por favor verifique seu código
          </h4>

          <input
            placeholder="Código de Verificação"
            name="code"
            maxLength="6"
            onChange={(e) => setCode(e.target.value)}
          />
          <span className="error">{`${error}`}</span>
          <button className="loginButton" id="loginButton">
            Verificar
          </button>
        </form>
      </div>
      <div className="right">
        <img alt="loginBackground" src="/bg.png" />
      </div>
    </div>
  );
}
