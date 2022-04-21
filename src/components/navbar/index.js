import React from "react";
import "./styles.css";
import {MdLogout} from "react-icons/md";
import {useNavigate} from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="align">
        <div className="logo">
          <a href="/timeline">
            <img alt="vipyLogo" src="/Logotipo.svg"/>
          </a>
        </div>
        <MdLogout
          className="logoutIcon"
          size={30}
          onClick={() => {
            navigate("/login");
          }}
        />
      </div>
    </nav>
  );
}
