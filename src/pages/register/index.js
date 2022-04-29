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
  
  const erros = 
  {'username': useState(""),
   'password': useState(""),
   'email': useState(""), 
   'name' : useState(""), 
   'birthday' : useState(""),
   'display_name': useState("")};



  function handleSubmit(e) {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("username", username);
    formdata.append("password", password);
    formdata.append("email", email);
    formdata.append("display_name", name);
    if (birthday !== "") 
      formdata.append("birthday", birthday);
    for (const key in erros) {
      erros[key][1]("");
    }
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
      }).catch((error) => {
        console.log(error.response, error.response.data);
        for(let i in error.response.data){
          if (i == 'user'){
            for(let j in error.response.data['user']){
              erros[j][1](error.response.data['user'][j]);
            }
          }
          else{
            erros[i][1](error.response.data[i]);
          }

        }
        console.log(erros, error.response.data)
      

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
            <span className="error">{`${erros['display_name'][0]}`}</span>
            <input
              placeholder="Display Name"
              name="display_name"
              onChange={(e) => setName(e.target.value)}
            />
            <span className="error">{`${erros['username'][0]}`}</span>
            <input
              placeholder="UserName"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="error">{`${erros['email'][0]}`}</span>
            <input
              placeholder="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error">{`${erros['password'][0]}`}</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <span className="error">{`${erros['birthday'][0]}`}</span> */}
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
            <Link to="/" className="loginButton">
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
